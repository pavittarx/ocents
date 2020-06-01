import { Resolvers, User, AuthPayload, Event } from "./tsdefs";
import { resolvers } from "graphql-scalars";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticationError } from "apollo-server-express";

export const gqlResolvers: Resolvers = {
  ...resolvers,

  Query: {
    user: async (root, args, ctx, info) => {
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

    addEvent: async (root, args, ctx, info): Promise<Event> => {
      const Authorization = ctx.req.get("Authorization");
      const token = Authorization? Authorization.replace("Bearer ", "") :  new AuthenticationError("Auth Token Missing");
      
      const payload = await ctx.services.auth.auth({token});

      return ctx.services.events.add(Object.assign({hostId: payload.id}, args));
    },
  }
};
