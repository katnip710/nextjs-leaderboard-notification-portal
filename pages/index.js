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

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                top: '40%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80%',
                height: 'auto',
                backgroundColor: '#f8f5f2',
                borderRadius: '20px',
                boxShadow: '20px 20px 40px hsla(34, 27%, 4%, 0.5)',
            }}>
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
