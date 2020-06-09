import { User } from "../graphql/tsdefs";
import { ApolloError } from "apollo-server-express";
import prisma from "../prisma";

import { ID } from "./types";

export async function getUserById(args: ID): Promise<User> {
  const user = await prisma.users.findOne({
    where: {
      id: args.id,
    },
  });

  if (!user) throw new ApolloError("The user does not exist.");

  return user;
}

export default {
  getUserById: getUserById,
};
