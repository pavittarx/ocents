import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import prisma from "./../prisma";

export default async function authentication(resolve, root, args, ctx, info) {
  // getToken from express req Object
  const Authorization = ctx.req.get("Authorization");
  if (!Authorization)
    throw new AuthenticationError(
      "The authentication token has not been provided"
    );

  const token = Authorization.replace("Bearer ", "");

  const payload = await jwt.decode(token);

  if (!token || !payload) throw new AuthenticationError("Invalid Token");

  const user = await prisma.users.findOne({
    where: {
      id: payload.id,
    },
  });

  const verifiedPlayLoad = await jwt.verify(token, user.password);
  if(!verifiedPlayLoad) throw new AuthenticationError("Invalid Token");

  return resolve(root, { ...args, payload: verifiedPlayLoad }, ctx, info);
}
