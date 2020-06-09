import { makeExecutableSchema } from "apollo-server-express";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";

import { typeDefs as queryDefs } from "./base/query";
import { typeDefs as mutationDefs } from "./base/mutation";
import { typeDefs as userDefs } from "./models/user";
import { typeDefs as eventDefs } from "./models/event";
import { typeDefs as authDefs } from "./models/auth";

import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs: [
    ...scalarTypeDefs,
    queryDefs,
    mutationDefs,
    userDefs,
    eventDefs,
    authDefs,
  ],
  resolvers,
});

export default schema;
