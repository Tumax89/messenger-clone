import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({

    apiKey: API_KEY,
    authDomain: "messenger-app-73ccd.firebaseapp.com",
    databaseURL: DB_URL,
    projectId: "messenger-app-73ccd",
    storageBucket: "messenger-app-73ccd.appspot.com",
    messagingSenderId: "132091890762",
    appId: API_ID,
    measurementId: MEASUREMENT
});

const db = firebaseApp.firestore();

export default db;
