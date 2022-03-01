import { Box, Text } from 'theme-ui'
import Row from '../components/Row'


export default function Home({ users }) {

    return (
        <Box>
            {/*<a href="/api/auth/login">Login</a>*/}

            <Box sx={{
                display: "grid",
                gridTemplateAreas: "'rank name score'",
                gridTemplateColumns: "10% 40% 50%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'lightBlue',
                marginBottom: '1rem'
            }}>
                <Text sx={{
                    gridArea: "rank",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>#</Text>
                <Text sx={{
                    gridArea: "name",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>Player</Text>
                <Text sx={{
                    gridArea: "score",
                    fontSize: "1rem",
                    display: "grid",
                    textAlign: "left",
                    color: 'black'
                }}>Score</Text>
            </Box>

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
}



export const getStaticProps = async () => {
    const leaderboard = await fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/PP3SPA6hmE89dX-ZLq-s9/entries?page=1&size=50");
    const data = await leaderboard.json()

    return {
        props: {
            users: data.items
        }
    }
}
