import  {Resolvers} from "./tsdefs";

export const resolvers: Resolvers ={
  Query: {
    user: (root, args, ctx,) => {
      return ctx.models.user.getUser();
    } 
  }
}