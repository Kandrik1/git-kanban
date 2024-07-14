import 'styles/globals.sass'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react";
import Page from "../components/Page";
import {PageConfig} from "../types/global";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ pageConfig: PageConfig, session: any }>) {

  return (
      <SessionProvider session={session}>
          <Page {...pageProps.pageConfig}>
              <Component {...pageProps} />
          </Page>
      </SessionProvider>
  )
}
