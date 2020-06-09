import { ApolloServer } from "apollo-server-express";

import { schema} from "./graphql/schema";

import auth from "./services/auth";
import events from "./services/events";
import users from "./services/users";

export const server = new ApolloServer({
  schema,
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
