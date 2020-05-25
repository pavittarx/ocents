import { gql } from "apollo-server-express";
import { typeDefs } from "graphql-scalars";
import { mergeTypeDefs } from "graphql-tools";

const gqlTypeDefs = gql`
  type Query {
    user: User!
  }

  type User {
    id: Int!
    name: String!
    email: EmailAddress!
    mobile: String
    picture: String
    about: String
    createdAt: DateTime
  }

  type AuthPayload {
    token: String
    User: User
  }

  type Mutation {
    signup(name: String, email: EmailAddress, password: String): User
    login(email: EmailAddress, password: String): AuthPayload
  }
`;

const defs = mergeTypeDefs([...typeDefs, gqlTypeDefs]);
export const typedefs = defs;
