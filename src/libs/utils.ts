import { AuthenticationError } from "apollo-server-express";

export function getToken(Authorization: string): string | Error {
  if (!Authorization) throw new AuthenticationError("Auth Token Missing");
  return Authorization.replace("Bearer ", "");
}
