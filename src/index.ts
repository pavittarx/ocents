import { ApolloServer } from "apollo-server-express";
import app from "./express";
import prisma from "./prisma";

import { typedefs } from "./graphql/schema";
import { gqlResolvers } from "./graphql/resolvers";

import auth from "./services/auth";

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: gqlResolvers,
  context: (req) => {
    return {
      ...req,
      services: {
        auth: auth
      }
    };
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
