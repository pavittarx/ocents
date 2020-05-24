import { ApolloServer } from "apollo-server-express";
import * as express from "express";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

import * as userModel from './graphql/models/users';

export interface Context {
  models: {
    users: typeof userModel;
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req) => {
    return {
      ...req,
      prisma,
      models: {
        user: userModel
      }
    }
  }
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
