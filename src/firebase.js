import firebase from 'firebase';
import {API_KEY, STORAGE, DATABASE} from './notes.js'


const firebaseApp = firebase.initializeApp({

    apiKey: API_KEY,
    authDomain: "messenger-app-73ccd.firebaseapp.com",
    databaseURL: DATABASE,
    projectId: "messenger-app-73ccd",
    storageBucket: STORAGE,
    messagingSenderId: "132091890762",
    appId: "1:132091890762:web:9fba75df8ac5ef5dd5aab3",
    measurementId: "G-4MB497LHT2"
});

const db = firebaseApp.firestore();

export default db;