import { ApolloServer } from "apollo-server-express";
import app from "./express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { gqlTypeDefs } from "./graphql/schema";
import { gqlResolvers } from "./graphql/resolvers";

import * as userModel from "./graphql/models/users";
import { typeDefs } from "graphql-scalars";

export interface Context {
  models: {
    users: typeof userModel;
  };
}

const server = new ApolloServer({
  typeDefs: [...typeDefs, gqlTypeDefs],
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
