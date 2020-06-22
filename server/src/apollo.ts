import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql/schema";

import auth from "./services/auth";
import events from "./services/events";
import users from "./services/users";

import { applyMiddleware } from "graphql-middleware";
import middleware from "./middleware";

const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

export const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: (req) => {
    return {
      ...req,
      services: {
        auth: auth,
        users: users,
        events: events,
      },
    };
  },
  introspection: true,
  playground: true,
});

export default server;