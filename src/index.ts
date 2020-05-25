import { ApolloServer } from "apollo-server-express";
import app from "./express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { typedefs } from "./graphql/schema";
import { gqlResolvers } from "./graphql/resolvers";

import * as userModel from "./graphql/models/users";

export interface Context {
  models: {
    users: typeof userModel;
  };
}

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: gqlResolvers,
  context: (req) => {
    return {
      ...req,
      prisma,
      models: {
        user: userModel,
      },
    };
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
