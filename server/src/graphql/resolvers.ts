import { resolvers as scalarResolvers} from "graphql-scalars";

import {Resolvers} from  "./tsdefs";

import {resolvers as queryResolvers} from "./base/query";
import {resolvers as mutationResolvers} from "./base/mutation";

export const resolvers: Resolvers = {
  ...scalarResolvers,
  Query: queryResolvers,
  Mutation: mutationResolvers
};
