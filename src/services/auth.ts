import { AuthPayload, User } from "../graphql/tsdefs";
import prisma from "../prisma";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { AuthenticationError } from "apollo-server-express";
import { Login, Signup } from "./types";

export async function login(args: Login): Promise<AuthPayload> {
  const user = await prisma.users.findOne({
    where: {
      email: args.email,
    },
  });

  if (!user) throw new AuthenticationError("Authentication Failed");
  if (!(await bcrypt.compare(args.password, user.password)))
    throw new AuthenticationError("Incorrect User Credentials");

  const userData = { id: user.id, name: user.name, email: user.email };
  const tokenOptions = [userData, user.password];

  return {
    token: jwt.sign(...tokenOptions),
    user: userData,
  };
}

export async function signup(args: Signup): Promise<User> {
  const user = await prisma.users.findOne({
    where: {
      email: args.email,
    },
  });

  if (user) throw new AuthenticationError("The user already exists");
  const hash = await bcrypt.hash(args.password, 8);
  const newUser = await prisma.users.create({
    data: {
      name: args.name,
      email: args.email,
      password: hash,
    },
  });

  return newUser;
}

export default {
  login: login,
  signup: signup,
};
