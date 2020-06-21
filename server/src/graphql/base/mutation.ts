import gql from "graphql-tag";
import {
  MutationResolvers,
  User,
  Event,
  AuthPayload,
  EventAttendee,
} from "../tsdefs";

export const typeDefs = gql`
  input Payload {
    id: Int!
    name: String!
    email: String!
  }

  type Mutation {
    signup(name: String, email: EmailAddress, password: String): User

    login(email: EmailAddress, password: String): AuthPayload
    addEvent(
      title: String
      content: String
      location: String
      published: Boolean
      payload: Payload
    ): Event

    updateEvent(
      id: Int
      title: String
      content: String
      location: String
      published: Boolean
      payload: Payload
    ): Event
    removeEvent(id: Int): Event
    addAttendee(eventId: Int, payload: Payload): EventAttendee
  }
`;

export const resolvers: MutationResolvers = {
  signup: async (root, args, ctx): Promise<User> => {
    return await ctx.services.auth.signup(args);
  },

  login: async (root, args, ctx): Promise<AuthPayload> => {
    return await ctx.services.auth.login(args);
  },

  addEvent: async (root, args, ctx): Promise<Event> => {
    return await ctx.services.events.add(
      Object.assign(
        {
          hostId: args.payload.id,
        },
        args
      )
    );
  },

  updateEvent: async (root, args, ctx): Promise<Event> => {
    return await ctx.services.events.update(
      Object.assign(
        {
          hostId: args.payload.id,
        },
        args
      )
    );
  },

  removeEvent: async (root, args, ctx): Promise<Event> => {
    return ctx.services.events.remove({
      id: args.id,
    });
  },

  addAttendee: async (root, args, ctx): Promise<EventAttendee> => {
    return await ctx.services.events.addAttendee(
      Object.assign(
        {
          userId: args.payload.id,
        },
        args
      )
    );
  },
};
