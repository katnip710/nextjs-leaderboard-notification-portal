import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

    const scorebotData = await fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/PP3SPA6hmE89dX-ZLq-s9/entries?page=1&size=50");
    const data = await scorebotData.json()

    const snapshot = await getDocs(collection(db, "leaderboard"))
    const firestoreData = snapshot.docs

    const response = {
        items:[]
    }

    data.items.forEach(scorebotObj => {
        const item = firestoreData.find(firestoreObj => firestoreObj.id === scorebotObj.player.id)
        if(item){
            scorebotObj.textSent = true
        }
        else{
            scorebotObj.textSent = false
        }
        response.items.push(scorebotObj)
    })

    console.log(response)

    res.status(200).json(response)
}