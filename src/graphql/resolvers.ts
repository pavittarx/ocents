import { Resolvers, User, ResolversTypes } from "./tsdefs";
import { resolvers } from "graphql-scalars";

export const gqlResolvers: Resolvers = {
  ...resolvers,
  Query: {
    user: async (root, args, ctx, info) => {
      console.log(ctx.prisma);
      const userData = await ctx.prisma.users.findOne({
        where: {
          id: 1,
        },
      });

      console.log("Data", userData);
      return userData;
    },
  },

  Mutation: {
    signup: async (root, args, ctx, info): Promise<User> => {
      const user = await ctx.prisma.users.create({
        data: {
          name: args.name,
          email: args.email
        }
      })

      return user;
    }
  },
};