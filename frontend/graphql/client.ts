/**
 * URQL Client to communicate with GraphQL API
 */

import { createClient } from "urql";
import * as env from "dotenv";
const config = env.config();

export const client = createClient({
  url: process.env.API_URL || (config as any).API_URL,
});
