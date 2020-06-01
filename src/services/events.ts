import { Event } from "./../graphql/tsdefs";
import prisma from "./../prisma";

import { EventArgs } from "./types";
import { UsersClient } from "@prisma/client";

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

export default {
  add: add,
};
