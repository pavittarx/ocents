import { ApolloServer } from "apollo-server-express";

import { typedefs } from "./graphql/schema";
import { gqlResolvers } from "./graphql/resolvers";

import auth from "./services/auth";
import events from "./services/events";
import users from "./services/users";

export const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: gqlResolvers,
  context: (req) => {
    return {
      ...req,
      services: {
        auth: auth,
        users: users,
        events: events
      }
    };
  },
  introspection: true,
  playground: true,
});

export default server;
