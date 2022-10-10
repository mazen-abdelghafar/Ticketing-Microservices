import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@ticketingdevorg/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
