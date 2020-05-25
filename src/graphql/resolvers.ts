import { Resolvers, User, AuthPayload } from "./tsdefs";
import { resolvers } from "graphql-scalars";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const gqlResolvers: Resolvers = {
  ...resolvers,

  Query: {
    user: async (root, args, ctx, info) => {
      console.log(ctx.prisma);
      const userData = await ctx.prisma.users.findOne({
        where: {
          id: 1,
        },
      });

      console.log("Data", userData);
      return userData;
    },
  },

  Mutation: {
    signup: async (root, args, ctx, info): Promise<User> => {
      return new Promise((resolve, reject)=>{
        bcrypt.hash(args.password, 8, async (err, hash)=>{
          if(err) reject(err);
          
          const user = await ctx.prisma.users.create({
            data: {
              name: args.name,
              email: args.email,
              password: hash
            },
          });

          resolve(user);
        });
      })
    },

    login: async (root, args, ctx, info): Promise<AuthPayload> => {

      let user = await ctx.prisma.users.findOne({
        where: {
          email: args.email
        }
      });
      console.log("Logging");
      console.log(user);
      if(!user) throw new Error("Invalid Credentials")
      else{
        const auth = bcrypt.compare(args.password, user.password)
        
        if(auth) {
          const tokenOptions = [{id:user.id, name: user.name}, "jwtPrivateKey"]
          console.log(jwt.sign({id:user.id, name: user.name}, "jwtPrivateKey"));
          return {
            token: jwt.sign(...tokenOptions),
            user
          }

        }
        else throw new Error("Invalid Credentials");
      }

    },
  }
};
