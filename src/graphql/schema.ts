import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query{
    user: User!
  }

  type User{
    id: Int!
    name: String!
    email: String!
    mobile: String
    picture: String
    about: String
  }
`;