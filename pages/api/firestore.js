import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, setDoc, getDoc, orderBy, serverTimestamp, updateDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

export default async function handler () {

    const scorebotData = await fetch("https://scorebot-api-service-q3nu3.ondigitalocean.app/v1/leaderboards/PP3SPA6hmE89dX-ZLq-s9/entries?page=1&size=50");
    const firestoreData = await getDocs(collection(db, "leaderboard"))

    const response = {
        items: []
    }

    scorebotData.forEach(obj => {
        const item = firestoreData.find(entry => entry.playerId === obj.id)
        response.items.push(item)
        return response
    })
}