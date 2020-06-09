export type ID = {
  id: number;
};

export interface Login {
  email: string;
  password: string;
}

export interface Signup extends Login {
  name: string;
}

export interface AuthToken {
  token: string;
}

export interface EventArgs {
  title: string;
  content: string;
  location: string;
  published: boolean;
  hostId: number;
}

export interface UpdateEventArgs extends EventArgs {
  id: number;
}

export interface EventAttendeeArgs {
  userId: number;
  eventId: number;
}
