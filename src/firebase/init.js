import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
const firebaseConfig = {
    apiKey: "AIzaSyAzuQsaYgANLQKlYEhOTXmP9Uzxx7o1cSA",
    authDomain: "task-organizer-vuejsfirebase.firebaseapp.com",
    databaseURL: "https://task-organizer-vuejsfirebase.firebaseio.com",
    projectId: "task-organizer-vuejsfirebase",
    storageBucket: "task-organizer-vuejsfirebase.appspot.com",
    messagingSenderId: "134621315167",
    appId: "1:134621315167:web:fb2a45031926cfc1461bea"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseFunction = firebaseApp.functions();
const database = firebaseApp.firestore();

export { database, firebaseFunction };