import { Resolvers } from "./tsdefs";
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
};
