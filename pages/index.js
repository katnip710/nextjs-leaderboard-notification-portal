import { Box, Text } from 'theme-ui'
import Row from '../components/Row'

export default function Home({ users }) {

    return (
        <Box>
            {/*<a href="/api/auth/login">Login</a>*/}

            <Box sx={{
                display: "grid",
                gridTemplateAreas: "'rank name button'",
                gridTemplateColumns: "10% 90%",
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
            </Box>

            {users.map(user => (
            <Row
                key= {user.id}
                rank={user.rank}
                name = {user.player.name} />
            ))}
        </Box>
    )
}



export const getStaticProps = async () => {
    const leaderboard = await fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/PP3SPA6hmE89dX-ZLq-s9/entries?page=1&size=50");
    const data = await leaderboard.json()

    require('dotenv').config();
    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        body: 'Hello from TWILIO!',
        to: '+2899280315', // Text this number
        from: '+12163696199', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

    return {
        props: {
            users: data.items
        }
    }
}
