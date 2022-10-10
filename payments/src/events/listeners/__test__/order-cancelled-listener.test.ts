import { OrderCancelledEvent, OrderStatus } from "@ticketingdevorg/common";
import { natsWrapper } from "../../../nats-wrapper";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";
import { OrderCancelledListener } from "../order-cancelled-listener";
import { Order } from "../../../models/order";

const setup = async () => {
  // create and instance of the listener
  const listener = new OrderCancelledListener(natsWrapper.client);

  // create and save an order
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    userId: "sdfds",
    price: 68,
    status: OrderStatus.Created,
  });
  // order.set({ status: OrderStatus.Cancelled });
  await order.save();

  // create a fake data event
  const data: OrderCancelledEvent["data"] = {
    id: order.id,
    version: 1,
    ticket: {
      id: "sdfdsf",
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg, order };
};

it("updates the status of the order", async () => {
  const { listener, data, msg, order } = await setup();
  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled);
});

// it("publishes a ticket cancelled event", async () => {
//   const { listener, ticket, data, msg, orderId } = await setup();

//   await listener.onMessage(data, msg);

//   expect(natsWrapper.client.publish).toHaveBeenCalled();

//   const ticketUpdatedData = JSON.parse(
//     (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
//   );

//   expect(ticketUpdatedData!.orderId).not.toBeDefined();
// });

it("acks the message", async () => {
  const { listener, data, msg } = await setup();
  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
