import { Resolvers, User, AuthPayload } from "./tsdefs";
import { resolvers } from "graphql-scalars";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const gqlResolvers: Resolvers = {
  ...resolvers,

  Query: {
    user: async (root, args, ctx, info) => {
      console.log(ctx.prisma);
      console.log(args);
      const userData = await ctx.prisma.users.findOne({
        where: {
          id: args.id,
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
      return ctx.services.auth.login(args.email, args.password);
    },
  }
};