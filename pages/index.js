import { Box } from 'theme-ui'
import Row from '../components/Row'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import Profile from '../components/Profile';
import Title from '../components/Title';


export default withPageAuthRequired(function Home({ users }) {

    return (
        <Box>
            <Profile />

            <Title />

            {users.map(user => (
            <Row
                key= {user.id}
                id={user.player.id}
                rank={user.rank}
                name = {user.player.name}
                score={user.score} />
            ))}
        </Box>
    )
})



export const getStaticProps = async () => {
    const leaderboard = await fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/PP3SPA6hmE89dX-ZLq-s9/entries?page=1&size=50");
    const data = await leaderboard.json()

    return {
        props: {
            users: data.items
        }
    }
}
