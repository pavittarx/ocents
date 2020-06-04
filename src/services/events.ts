import { Event } from "./../graphql/tsdefs";
import prisma from "./../prisma";

import { EventArgs, ID } from "./types";

export async function add(args: EventArgs): Promise<Event> {
  const event = await prisma.events.create({
    data: {
      title: args.title,
      content: args.content,
      location: args.location,
      published: args.published? args.published : false,
      Users: {
        connect: {
          id: args.hostId
        }
      }
    }
  })

  return event;
}

export async function remove(args: ID){
  const deletedEvent = await prisma.events.delete({
    where: {
      id: args.id
    }
  })

  console.log(deletedEvent);
  return deletedEvent;
}

export default {
  add: add,
  remove: remove
};
