import { AuthPayload } from "../graphql/tsdefs";
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
    },
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
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  };
}

export async function signup({name: string, email: email, password: password}){

}

export default {
  login: login,
};
