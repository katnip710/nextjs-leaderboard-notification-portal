import twilio from "twilio"
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCZVuetUiXNHylSbMWyRMZgP1afxstD5io",
    authDomain: "notification-portal-cc2be.firebaseapp.com",
    projectId: "notification-portal-cc2be",
    storageBucket: "notification-portal-cc2be.appspot.com",
    messagingSenderId: "536513890814",
    appId: "1:536513890814:web:14d1a251f5e0b0bf1fd8af"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export default async function handler (req, res) {
    if (req.method === "POST") {
        const { playerId } = JSON.parse (req.body)

        const firestoreCheck = await checkFirestore(playerId)
        const firestoreResp = await updateFirestore(playerId)
        const twilioResp = await sendTwilio(playerId)

        res.status(200).json({status: "This works"})
    }
        else if (req.method ==="GET"){

    } else{
        return res.status(405).json({ error: "Method not supported" })
    }
}

export async function checkFirestore(playerId){
    const docRef = doc(db, "leaderboard", playerId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Already sent!");
        exit()

    } else {
        console.log("No such document exsists!");
    }
}

async function sendTwilio(playerId){
    try {
        const accountSid = process.env.TWILIO_ACCT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = new twilio(accountSid, authToken);

        //const { playerId } = JSON.parse (req.body)
        const playerReq = await fetch(`https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/players/${playerId}`)
        const playerInfo = await playerReq.json()

        const message = await client.messages.create({
            body: 'Hello from TWILIO!',
            to: playerInfo.data.phone,
            from: '+12163696199',
        })
        return { message: "Success!" }

    } catch (error) {
        console.error(error)
        return {error: "Oops, that doesn't work"}
    }
}

async function updateFirestore(playerId){
    const ref = setDoc(doc(db, "leaderboard", playerId), {
        id: playerId,
        notified: new Date(),
        textSent: true
    })
        console.log("This Workss")
        console.log(ref)

    return {status: "sent!"}
}