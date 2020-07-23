import gql from "graphql-tag";
import { QueryResolvers } from "../tsdefs";

export const typeDefs = gql`
  type Query {
    user(id: Int): User
    events: [Event]
    event(id: Int): Event
  }
`;

export const resolvers: QueryResolvers = {
  user: async (root, args, ctx) => {
    return await ctx.services.users.getUserById(args);
  },

  events: async (root, args, ctx) => {
    return await ctx.services.events.getEvents();
  },

  event: async (root, args, ctx) => {
    return await ctx.services.events.getEventById(args);
  }

 
};
