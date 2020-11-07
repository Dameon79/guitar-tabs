import React from "react";
import firebase from "firebase/app";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import FretBoard from "./components/Fretboard";
import "./App.css";

function App() {
  const chordData = {
    name: "C",
    stringPositions: {
      1: 0,
      2: 0,
      3: 3,
      4: 2,
      5: 1,
      6: 1,
    },
  };
  return (
    <React.Fragment>
      <div className="fretContainer">
        <div className="App">{chordData.name}</div>
        <div className="nut" />
        <FretBoard chordData={chordData} />
      </div>
    </React.Fragment>
  );
}

export default App;
