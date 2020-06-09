import gql from "graphql-tag";

export const typeDefs = gql`
  type AuthPayload {
    token: String
    user: User
  }
`;
