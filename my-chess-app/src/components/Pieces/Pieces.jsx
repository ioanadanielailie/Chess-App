import React from "react";
import "./pieces.css";
import Piece from "./Piece";
import { createPosition, copyPosition } from "../../helper";
import { useState, useRef } from "react";

const Pieces = () => {
  const ref = useRef();
  const [state, setState] = useState(createPosition());

  const calculateCoords = (e) => {
    const { top, left, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    console.log(x, y);
    return { x, y };
  };
  const onDrop = (e) => {
    const newPosition = copyPosition(state);
    const { x, y } = calculateCoords(e);
    const [piece, row, column] = e.dataTransfer.getData("text").split(",");
    const intColumn = parseInt(column);
    const intRow = parseInt(row);
    newPosition[intRow][intColumn] = "";
    newPosition[x][y] = piece; //here
    setState(newPosition);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div ref={ref} onDrop={onDrop} onDragOver={onDragOver} className="pieces">
      {state.map((r, row) =>
        r.map((c, column) =>
          state[row][column] ? (
            <Piece
              key={row + "-" + column}
              row={row}
              column={column}
              piece={state[row][column]}
            />
          ) : null
        )
      )}
    </div>
  );
};
export default Pieces;
