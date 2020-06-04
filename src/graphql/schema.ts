import { gql } from "apollo-server-express";
import { typeDefs } from "graphql-scalars";
import { mergeTypeDefs } from "graphql-tools";

const gqlTypeDefs = gql`
  type Query {
    user(id: Int): User!
  }

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

  type Event {
    id: Int!
    title: String!
    content: String!
    location: String
    published: Boolean!
    host: Int!
    createdAt: DateTime
  }

  type EventAttendees{
    userId: Int!
    eventId: Int!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Mutation {
    signup(name: String, email: EmailAddress, password: String): User
    login(email: EmailAddress, password: String): AuthPayload
    addEvent(title: String, content: String, location: String, published: Boolean): Event
    addEventAttendees(eventId: Int): EventAttendees
  }
`;

const defs = mergeTypeDefs([...typeDefs, gqlTypeDefs]);
export const typedefs = defs;
