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
    EventAttendee: EventAttendee
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
    Users: User!
    EventAttendees: [EventAttendee]
  }

  type EventAttendee {
    eventId: Int!
    id: Int!
    userId: Int!
    Events: [Event!]!
    User: User
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Mutation {
    signup(name: String, email: EmailAddress, password: String): User
    login(email: EmailAddress, password: String): AuthPayload
  }
`;

const defs = mergeTypeDefs([...typeDefs, gqlTypeDefs]);
export const typedefs = defs;
