// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import twilio from "twilio"

export default async function handler (req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "method not supported" })
    }

    console.log(req.body)
    //TODO: pull user info in from scorebot

    // fetch request to scorebot with the id in req.body.playerId
    //player.data.phone

    try {
        // require('dotenv').config();
        const accountSid = process.env.TWILIO_ACCT_SID; // Your Account SID from www.twilio.com/console
        const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
        const client = new twilio(accountSid, authToken);

        const message = await client.messages.create({
            body: 'Hello from TWILIO!',
            to: '+12899280315', // Text this number
            from: '+12163696199', // From a valid Twilio number
        })

        return res.json({ message: "Success!" })
    }
    catch (error) {
        console.error(error)
        return res.json({ message: "Oops, that didn't work..." })
    }
}