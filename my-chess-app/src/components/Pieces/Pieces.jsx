import React from "react";
import "./pieces.css";
import Piece from "./Piece";

const Pieces = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));
  position[0][0] = "BlackRook";
  position[7][7] = "WhiteRook";
  console.log(position);

  return (
    <div className="pieces">
      {position.map((r, row) =>
        r.map((c, column) =>
          position[row][column] ? (
            <Piece
              key={row + "-" + column}
              row={row}
              column={column}
              piece={position[row][column]}
            />
          ) : null
        )
      )}
    </div>
  );
};
export default Pieces;
