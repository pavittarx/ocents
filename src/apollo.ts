import { ApolloServer } from "apollo-server-express";

import { typedefs } from "./graphql/schema";
import { gqlResolvers } from "./graphql/resolvers";

import auth from "./services/auth";
import events from "./services/events";
import attendees from "./services/attendees"

export const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: gqlResolvers,
  context: (req) => {
    return {
      ...req,
      services: {
        auth: auth,
        events: events,
        attendees: attendees
      }
    };
  },
  introspection: true,
  playground: true
});

export default server;
