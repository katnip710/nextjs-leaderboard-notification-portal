import '../styles/globals.css'
import { ThemeProvider } from "theme-ui"
import theme from "../theme"
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
      <Head>
        <title>Leaderboard Notification Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default MyApp
