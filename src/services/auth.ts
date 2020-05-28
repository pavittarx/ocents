import { AuthPayload, User } from "../graphql/tsdefs";
import prisma from "../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AuthenticationError } from "apollo-server-express";

export async function login(
  email: string,
  password: string
): Promise<AuthPayload> {
  const user = await prisma.users.findOne({
    where: {
      email: email,
    }
  });

  if (!user) throw new AuthenticationError("Authentication Failed");
  if (!(await bcrypt.compare(password, user.password)))
    throw new AuthenticationError("Incorrect User Credentials");

  const tokenOptions = [
    { id: user.id, name: user.name, email: user.email },
    user.password,
  ];

  return {
    token: jwt.sign(...tokenOptions),
    user: user,
  };
}

export async function signup(
  name: string, 
    email: string, 
    password: string
    ): Promise<User> {
      return new Promise(async (resolve, reject)=>{
        
        const existingUser = await prisma.users.findOne({
          where: {
            email: email,
          }
        });

        if (existingUser) {
          reject("User allready exist");
        }
        bcrypt.hash(password, 8, async (err, hash)=>{
          if(err) reject(err);
          
          const user = await prisma.users.create({
            data: {
              name: name,
              email: email,
              password: hash
            },
          });

          resolve(user);
        });
      })
}

export default {
  login: login,
  signup: signup
};
