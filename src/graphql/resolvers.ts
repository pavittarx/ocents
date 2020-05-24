import  {Resolvers} from "./tsdefs";
import { resolvers } from "graphql-scalars";

export const gqlResolvers: Resolvers ={
  ...resolvers,
  Query: {
    user: (root, args, ctx,) => {
      return ctx.models.user.getUser();
    } 
  }
}