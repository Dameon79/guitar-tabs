import React from "react";
import firebase from "firebase/app";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCYqjlJuJVFrik6jgQaRLEDdnOazqJqkak",
  authDomain: "guitar-tabs-95bf0.firebaseapp.com",
  databaseURL: "https://guitar-tabs-95bf0.firebaseio.com",
  projectId: "guitar-tabs-95bf0",
  storageBucket: "guitar-tabs-95bf0.appspot.com",
  messagingSenderId: "609982359130",
  appId: "1:609982359130:web:7a1fe68613d842e49c1a63",
  measurementId: "G-EJXTMKHYR7",
});

function App() {
  return <div className="App">Alfie Smells</div>;
}

export default App;
