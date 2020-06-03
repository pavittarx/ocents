import { EventAttendees } from "./../graphql/tsdefs";
import prisma from "./../prisma";

import { EventAttendeesArgs } from "./types";

export async function add(args: EventAttendeesArgs): Promise<EventAttendees> {
  const event = await prisma.eventAttendees.create({
    data: {
        Events:{
            connect: {
                id: args.eventId
            }
        },
        Users: {
            connect: {
                id: args.userId
            }
        }
    }
  })

  return event;
}

export default {
  add: add,
};
