import { Event, EventAttendee } from "../graphql/tsdefs";
import prisma from "../prisma";
import { EventArgs, UpdateEventArgs, ID, EventAttendeeArgs } from "./types";

export async function add(args: EventArgs): Promise<Event> {
  const event = await prisma.events.create({
    data: {
      title: args.title,
      content: args.content,
      location: args.location,
      published: args.published ? args.published : false,
      Users: {
        connect: {
          id: args.hostId,
        },
      },
    },
  });

  return event;
}

export async function remove(args: ID) {
  const deletedEvent = await prisma.events.delete({
    where: {
      id: args.id,
    },
  });

  return deletedEvent;
}

export async function update(args: UpdateEventArgs) {
  const updateEvent = await prisma.events.update({
    where: {
      id: args.id,
    },
    data: {
      title: args.title,
      content: args.content,
      location: args.location,
      published: args.published ? args.published : false,
    },
  });
  return updateEvent;
}

export async function addAttendee(
  args: EventAttendeeArgs
): Promise<EventAttendee> {
  const event = await prisma.eventAttendees.create({
    data: {
      Events: {
        connect: {
          id: args.eventId,
        },
      },
      Users: {
        connect: {
          id: args.userId,
        },
      },
    },
  });

  return event;
}

export default {
  add,
  remove,
  update,
  addAttendee,
};
