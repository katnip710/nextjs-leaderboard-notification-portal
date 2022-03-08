import { Box, Text, Image } from 'theme-ui'
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';


export default function Profile() {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
            backgroundColor: '#f8f5f2',
            fontFamily: 'sans-serif',
            fontWeight: '600',
            fontSize: '.9rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            {user && (
                <Box sx={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                }}>
                    <Image src={user.picture} alt={user.name} sx={{
                        width: '50px',
                        marginBottom: '.5rem',
                        borderRadius: '50px',
                        boxShadow: '4px 4px 10px grey'
                    }} />
                    <Text>Welcome {user.name}!</Text>
                </Box>
            )}

            <Box sx={{
                padding: '1rem',
            }}>
                <a href="/api/auth/logout">Logout</a>
            </Box>
        </Box>
    )
}
