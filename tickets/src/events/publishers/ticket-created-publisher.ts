import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@ticketingdevorg/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
