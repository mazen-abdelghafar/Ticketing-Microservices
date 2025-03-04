import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@ticketingdevorg/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
