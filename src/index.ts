import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const server = new ApolloServer({
  modules: [require("./graphql/User")],
  context: (req) => {
    return {
      ...req,
      prisma,
    }
  }
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
