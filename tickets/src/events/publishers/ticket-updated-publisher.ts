import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@ticketingdevorg/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
