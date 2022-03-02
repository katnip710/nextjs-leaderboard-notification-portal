import twilio from "twilio"
import { withApiAithRequired } from "@auth0/nextjs-auth0"

export default withApiAuthRequired(async function handler (req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "method not supported" })
    }

    try {
        const accountSid = process.env.TWILIO_ACCT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = new twilio(accountSid, authToken);

        const { playerId } = JSON.parse (req.body)
        const playerReq = await fetch(`https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/players/${playerId}`)
        const playerInfo = await playerReq.json()

        const message = await client.messages.create({
            body: 'Hello from TWILIO!',
            to: playerInfo.data.phone,
            from: '+12163696199',
        })

        return res.json({ message: "Success!" })
    }
    catch (error) {
        console.error(error)
        return res.json({ message: "Oops, that didn't work..." })
    }
})