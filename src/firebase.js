import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCC-zCwBcvCxldV7a4zB5vGyg6zWMGOhWg",
    authDomain: "messenger-app-73ccd.firebaseapp.com",
    databaseURL: "https://messenger-app-73ccd.firebaseio.com",
    projectId: "messenger-app-73ccd",
    storageBucket: "messenger-app-73ccd.appspot.com",
    messagingSenderId: "132091890762",
    appId: "1:132091890762:web:9fba75df8ac5ef5dd5aab3",
    measurementId: "G-4MB497LHT2"
});

const db = firebaseApp.firestore();

export default db;