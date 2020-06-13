import logger from "./logger";
import authentication from "./auth";

const auth = {
  Mutation: {
    addEvent: authentication,
    updateEvent: authentication,
    addAttendee: authentication,
  },
};

export default [logger, auth];
