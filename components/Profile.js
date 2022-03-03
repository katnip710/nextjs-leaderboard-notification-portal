import { Box, Text, Image } from 'theme-ui'
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';


export default function Profile() {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <Box>
            <a href="/api/auth/login">Login</a>
            <a href="/api/auth/logout">Logout</a>

            {user && (
                <Box>
                    <Image src={user.picture} alt={user.name} sx={{
                        width: '50px'
                    }} />
                    <Text>{user.name}</Text>
                    <Text>{user.email}</Text>
                </Box>
            )}
        </Box>
    )
}
