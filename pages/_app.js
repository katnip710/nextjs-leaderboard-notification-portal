import '../styles/globals.css'
import { ThemeProvider } from "theme-ui"
import theme from "../theme"
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {

  // const [isLoading, setLoading] = useState(true)
  // const [theInfo, setTheInfo] = useState()

  // useEffect(() => {
  //   fetch ("/api/firestore")
  //     .then(response => {
  //       response.json()
  //         .then(data => {
  //           setTheInfo(data)
  //           setLoading(false)
  //         })
  //     })
  // }, [])

  // if(isLoading){
  //   return(
  //     <div>Loading...</div>
  //   )
  // } else {

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
//}

export default MyApp
