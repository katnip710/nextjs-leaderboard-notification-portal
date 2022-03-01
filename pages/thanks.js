import { Box, Text } from 'theme-ui'
import Row from '../components/Row'
import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';


export default function Thanks({ users }) {

    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <Box>
        {user && (
            <Box>
                <img src={user.picture} alt={user.name} />
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
            </Box>
        )}

        </Box>
    )
}
