import { OrderCreatedEvent, OrderStatus } from "@ticketingdevorg/common";
import { natsWrapper } from "../../../nats-wrapper";
import { OrderCreatedListener } from "../order-created-listener";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";
import { Order } from "../../../models/order";

const setup = async () => {
  // create and instance of the listener
  const listener = new OrderCreatedListener(natsWrapper.client);

  // create a fake data event
  const data: OrderCreatedEvent["data"] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    status: OrderStatus.Created,
    userId: "dsfsdf",
    expiresAt: "dfsds",
    ticket: {
      id: "sdfdsf",
      price: 49,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
};

it("replicates the order info", async () => {
  const { listener, data, msg } = await setup();
  await listener.onMessage(data, msg);

  const order = await Order.findById(data.id);

  expect(order!.price).toEqual(data.ticket.price);
});

// it("publishes a ticket updated event", async () => {
//   const { listener, ticket, data, msg } = await setup();
//   await listener.onMessage(data, msg);

//   const ticketUpdatedData = JSON.parse(
//     (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
//   );

//   expect(natsWrapper.client.publish).toHaveBeenCalled();
//   expect(data.id).toEqual(ticketUpdatedData.orderId);
// });

it("acks the message", async () => {
  const { listener, data, msg } = await setup();
  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
