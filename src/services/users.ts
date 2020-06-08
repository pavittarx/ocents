import { User } from "../graphql/tsdefs";
import prisma from "../prisma";

import { ID } from "./types";

export async function getUserById(args: ID): Promise<User>
{
    const userData = await prisma.users.findOne({
        where: {
          id: args.id,
        },
      });
      return userData;
}

export default{
  getUserById: getUserById
}