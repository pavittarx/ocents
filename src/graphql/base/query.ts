import gql from "graphql-tag";
import { QueryResolvers } from "../tsdefs";

export const typeDefs = gql`
  type Query {
    user(id: Int): User
  }
`;

export const resolvers: QueryResolvers = {
  user: async (root, args, ctx) => {
    return await ctx.services.users.getUserById(args);
  },
};
