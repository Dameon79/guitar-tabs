import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

import firebaseDb from "./firebaseConfig";
import FretBoard from "./components/Fretboard";
import "./App.css";

function App() {
  const [chords, setChords] = useState(null);
  const [selectedChord, setSelectedChord] = useState("C");

  const handleChange = (event) => {
    setSelectedChord(event.target.value);
  };

  useEffect(() => {
    firebaseDb.collection("chords").onSnapshot((snapshot) =>
      setChords(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    );
  }, []);

  const chordData =
    chords &&
    chords.filter((chord) => chord.data.name === selectedChord && chord);

  console.log(chordData);

  return chordData !== null ? (
    <React.Fragment>
      <FormControl>
        <InputLabel>Chord</InputLabel>
        <Select value={selectedChord} onChange={handleChange} defaultValue="C">
          <MenuItem value="C">C Cord</MenuItem>
          <MenuItem value="A">A Cord</MenuItem>
        </Select>
      </FormControl>
      <div className="fretContainer">
        <div className="App">{chordData.name}</div>
        {chordData && (
          <div className="strings">
            <div className="strumIndicator">
              {chordData[0].data.mutedStrings.includes(1) && "X"}
            </div>
            <div className="strumIndicator">
              {chordData[0].data.mutedStrings.includes(2) && "X"}
            </div>
            <div className="strumIndicator">
              {chordData[0].data.mutedStrings.includes(3) && "X"}
            </div>
            <div className="strumIndicator">
              {chordData[0].data.mutedStrings.includes(4) && "X"}
            </div>
            <div className="strumIndicator">
              {chordData[0].data.mutedStrings.includes(5) && "X"}
            </div>
            <div className="strumIndicator">
              {chordData[0].data.mutedStrings.includes(6) && "X"}
            </div>
          </div>
        )}

        <div className="nut" />
        <FretBoard chordData={chordData[0].data} />
      </div>
    </React.Fragment>
  ) : (
    "Loading"
  );
}

export default App;
