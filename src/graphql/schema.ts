import { gql } from 'apollo-server-express';

export const gqlTypeDefs = gql`
  type Query{
    user: User!
  }

  type User{
    id: Int!
    name: String!
    email: EmailAddress!
    mobile: String
    picture: String
    about: String
  }
`;