import gql  from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: EmailAddress!
    mobile: String
    password: String
    picture: String
    about: String
    createdAt: DateTime
    Events: [Event]
  }
`;
