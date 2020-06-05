import { Resolvers, User, AuthPayload, Event, EventAttendees } from "./tsdefs";
import { resolvers } from "graphql-scalars";
import { AuthenticationError } from "apollo-server-express";

import {getToken } from "./../libs/utils";

export const gqlResolvers: Resolvers = {
  ...resolvers,

  Query: {
    user: async (root, args, ctx) => {
      const userData = await ctx.prisma.users.findOne({
        where: {
          id: args.id,
        },
      });
      return userData;
    }
  },

  Mutation: {
    signup: async (root, args, ctx): Promise<User> => {
      return await ctx.services.auth.signup(args);
    },

    login: async (root, args, ctx): Promise<AuthPayload> => {
      return await ctx.services.auth.login(args);
    },

    addEvent: async (root, args, ctx): Promise<Event> => {
      const token = getToken(ctx.req.get("Authorization"));
      const payload = await ctx.services.auth.auth({token});

      return await ctx.services.events.add(Object.assign({hostId: payload.id}, args));
    },

    updateEvent: async(root, args, ctx ): Promise<Event> => {
      const token = getToken(ctx.req.get("Authorization"));
      const payload = await ctx.services.auth.auth({token});

      return await ctx.services.events.update(Object.assign({hostId: payload.id}, args));
    },

    addEventAttendees: async (root, args, ctx): Promise<EventAttendees> =>
    {
      const token = getToken(ctx.req.get("Authorization"));
      const payload = await ctx.services.auth.auth({token});
      return await ctx.services.attendees.add(Object.assign({userId: payload.id}, args));
    },

    
  }
};
