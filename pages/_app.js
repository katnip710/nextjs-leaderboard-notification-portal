import '../styles/globals.css'
import { ThemeProvider } from "theme-ui"
import theme from "../theme"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Leaderboard Notification Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
