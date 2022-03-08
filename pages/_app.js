import '../styles/globals.css'
import { ThemeProvider, Box } from "theme-ui"
import theme from "../theme"
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [isLoading, setLoading] = useState(true)
  const [theData, setData] = useState(null)

  useEffect(() => {fetchData()},[])
    const fetchData = async () =>{
      const response = await fetch("/api/firestore")

      const data = await response.json()
      setData (data.items)
      setLoading(false)
    }

    if(isLoading){return(
      <Box sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'sans-serif',
        fontWeight: '600',
        fontSize: '1rem',
      }}>
        Loading...
      </Box>
    )}
    if (!theData) return <p>no data</p>

    else{

      return (
        <>
          <UserProvider>
          <Head>
            <title>Leaderboard Notification Portal</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} users={theData} />
            </ThemeProvider>
          </UserProvider>
        </>
      )
  }
}

export default MyApp
