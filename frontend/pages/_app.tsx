import { AppProps } from "next/app";
// import { ApolloProvider } from '@apollo/react-hooks';

// import client from './../libs/apollo';
import "@/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

