import { Resolvers, User, AuthPayload } from "./tsdefs";
import { resolvers } from "graphql-scalars";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const gqlResolvers: Resolvers = {
  ...resolvers,

  Query: {
    user: async (root, args, ctx, info) => {
      console.log(ctx.prisma);
      console.log(args);
      const userData = await ctx.prisma.users.findOne({
        where: {
          id: args.id,
        },
      });

      console.log("Data", userData);
      return userData;
    },
  },

  Mutation: {
    signup: async (root, args, ctx): Promise<User> => {
      return await ctx.services.auth.signup(args);
    },

    login: async (root, args, ctx, info): Promise<AuthPayload> => {
      return await ctx.services.auth.login(args);
    },
  }
};