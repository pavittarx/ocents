import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { withData } from "next-apollo";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://ocents.herokuapp.com/api",
  }),
});

export default withData(client);