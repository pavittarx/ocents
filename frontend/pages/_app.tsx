import { AppProps } from "next/app";
import { ApolloProvider } from '@apollo/react-hooks';

import withData from './../libs/apollo';
import "@/styles/global.scss";

function App({ Component, pageProps, apollo }: AppProps) {
  return <ApolloProvider client={apollo}>
            <Component {...pageProps} />
          </ApolloProvider>;
}

export default withData(App);

