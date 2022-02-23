//import { useState } from 'react';
import { Box } from 'theme-ui';
import Row from '../components/Row'
import { useEffect } from 'react';

export default function Home() {

    useEffect(()=>{
        fetch("api/hello").
        then (res =>{console.log(res)})
    })

    return (
        <Box>
            {/*<a href="/api/auth/login">Login</a>*/}
            <Row />
        </Box>
    )
}
