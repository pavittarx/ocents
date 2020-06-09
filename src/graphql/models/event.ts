import gql from "graphql-tag";

export const typeDefs = gql`
  type Event {
    id: Int!
    title: String!
    content: String!
    location: String
    published: Boolean!
    host: Int!
    createdAt: DateTime
  }

  type EventAttendee {
    userId: Int!
    eventId: Int!
  }
`;
