import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@ticketingdevorg/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
