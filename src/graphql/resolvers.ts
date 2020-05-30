import { Resolvers, User, AuthPayload } from "./tsdefs";
import { resolvers } from "graphql-scalars";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    }
  },
};
