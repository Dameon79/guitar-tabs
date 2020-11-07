import React from "react";
import "./Fretboard.css";

const Fretboard = ({ chordData }) => {
  return (
    <div className="fretBoard">
      <div className="fret">
        {chordData.stringPositions[1].fret === 1 && (
          <div className="fretBoard__finger">
            {" "}
            {chordData.stringPositions[1].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2].fret === 1 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[2].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3].fret === 1 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[3].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {" "}
        {chordData.stringPositions[4].fret === 1 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[4].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5].fret === 1 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[5].finger}
          </div>
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6].fret === 1 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[6].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[1].fret === 2 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[1].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2].fret === 2 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[2].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3].fret === 2 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[3].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[4].fret === 2 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[4].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5].fret === 2 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[5].finger}
          </div>
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6].fret === 2 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[6].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[1].fret === 3 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[1].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2].fret === 3 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[2].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3].fret === 3 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[3].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[4].fret === 3 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[4].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5].fret === 3 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[5].finger}
          </div>
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6].fret === 3 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[6].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[1].fret === 4 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[1].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[2].fret === 4 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[2].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[3].fret === 4 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[3].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[4].fret === 4 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[4].finger}
          </div>
        )}
      </div>
      <div className="fret">
        {chordData.stringPositions[5].fret === 4 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[5].finger}
          </div>
        )}
      </div>
      <div className="fret-right">
        {chordData.stringPositions[6].fret === 4 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[6].finger}
          </div>
        )}
      </div>
      <div className="fret-bottom">
        {chordData.stringPositions[1].fret === 5 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[1].finger}
          </div>
        )}
      </div>
      <div className="fret-bottom">
        {chordData.stringPositions[2].fret === 5 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[2].finger}
          </div>
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[3].fret === 5 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[3].finger}
          </div>
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[4].fret === 5 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[4].finger}
          </div>
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[5].fret === 5 && (
          <div className="fretBoard__finger">
            {chordData.stringPositions[5].finger}
          </div>
        )}
      </div>
      <div className="fret-bottom">
        {" "}
        {chordData.stringPositions[6].fret === 5 && (
          <div className="fretBoard__finger-last">
            {chordData.stringPositions[6].finger}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fretboard;
