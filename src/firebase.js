import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwdzJCnZ8gnniPYlm4kORUN4sTyIFQXSo",
  authDomain: "linkedin-clone-5b77a.firebaseapp.com",
  projectId: "linkedin-clone-5b77a",
  storageBucket: "linkedin-clone-5b77a.appspot.com",
  messagingSenderId: "378463496771",
  appId: "1:378463496771:web:547b722368c772d1b502f6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
