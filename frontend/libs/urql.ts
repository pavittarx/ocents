import { createClient } from 'urql';

export const client = createClient({
  url: 'https://ocents.herokuapp.com/api',
});


