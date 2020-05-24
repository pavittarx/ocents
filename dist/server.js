'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var express = _interopDefault(require('express'));
var apolloServerExpress = require('apollo-server-express');
var client = require('@prisma/client');

const prisma = new client.PrismaClient();

const server = new apolloServerExpress.ApolloServer({
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
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
