type ResolverFunction = (parents: any, args: any, ctx: any, info: any) => any;

interface ResolverMap {
  [field: string]: ResolverFunction;
}

interface Resolvers {
  [field: string]: ResolverMap;
}

import { getUser } from "./models/users";

export const resolvers: Resolvers ={
  Query: {
    user: (root, args, ctx,) => {
      return getUser();
    } 
  }
}