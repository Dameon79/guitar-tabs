import React from "react";
import "./Fretboard.css";

const Fretboard = ({ chordData }) => {
  return (
    <div className="fretBoard">
      <div className="fret">
        {chordData.stringPositions[1] === 1 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2] === 1 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3] === 1 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {" "}
        {chordData.stringPositions[4] === 1 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5] === 1 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6] === 1 && (
          <div className="fretBoard__finger" />
        )}
      </div>

      <div className="fret">
        {chordData.stringPositions[1] === 2 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2] === 2 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3] === 2 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[4] === 2 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5] === 2 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6] === 2 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[1] === 3 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2] === 3 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3] === 3 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[4] === 3 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5] === 3 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6] === 3 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[1] === 4 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2] === 4 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3] === 4 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[4] === 4 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5] === 4 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6] === 4 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-bottom">
        {chordData.stringPositions[1] === 5 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-bottom">
        {chordData.stringPositions[2] === 5 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[3] === 5 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[4] === 5 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[5] === 5 && (
          <div className="fretBoard__finger" />
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[6] === 5 && (
          <div className="fretBoard__finger-last" />
        )}
      </div>
    </div>
  );
};

export default Fretboard;
