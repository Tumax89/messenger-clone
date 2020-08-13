import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({

    apiKey: process.env.API_KEY,
    authDomain: "messenger-app-73ccd.firebaseapp.com",
    databaseURL: process.env.DATABASE,
    projectId: "messenger-app-73ccd",
    storageBucket: process.env.STORAGE,
    messagingSenderId: "132091890762",
    appId: "1:132091890762:web:9fba75df8ac5ef5dd5aab3",
    measurementId: "G-4MB497LHT2"
});

const db = firebaseApp.firestore();

export default db;