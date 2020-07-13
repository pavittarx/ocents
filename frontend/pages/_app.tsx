import { AppProps } from "next/app";
import { Provider } from "urql"; 

import { client } from "@/libs/urql";

import "@/styles/global.scss";

function App({ Component, pageProps }: AppProps) {
  return <Provider value={client}>
            <Component {...pageProps} />
          </Provider>;
}

export default App;

