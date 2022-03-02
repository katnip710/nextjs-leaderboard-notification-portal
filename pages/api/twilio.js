import twilio from "twilio"
//import { withApiAithRequired } from "@auth0/nextjs-auth0"
import { initializeApp } from "firebase/app";

export default async function handler (req, res) {

    const firebaseConfig = {
        apiKey: "AIzaSyCjuzCSx08_sxU5YjAM1AHXEikr5_iTOE8",
        authDomain: "notification-portal-1fffd.firebaseapp.com",
        projectId: "notification-portal-1fffd",
        storageBucket: "notification-portal-1fffd.appspot.com",
        messagingSenderId: "641237295244",
        appId: "1:641237295244:web:b72cf48e9e4c2f7da79ba9"
    };

    const app = initializeApp(firebaseConfig);

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
}