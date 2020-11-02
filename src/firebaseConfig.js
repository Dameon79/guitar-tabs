import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYqjlJuJVFrik6jgQaRLEDdnOazqJqkak",
  authDomain: "guitar-tabs-95bf0.firebaseapp.com",
  databaseURL: "https://guitar-tabs-95bf0.firebaseio.com",
  projectId: "guitar-tabs-95bf0",
  storageBucket: "guitar-tabs-95bf0.appspot.com",
  messagingSenderId: "609982359130",
  appId: "1:609982359130:web:7a1fe68613d842e49c1a63",
  measurementId: "G-EJXTMKHYR7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseDb = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default firebaseDb;
