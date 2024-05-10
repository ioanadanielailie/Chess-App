import React from "react";
import "./pieces.css";
import Piece from "./Piece";
import { createPosition, copyPosition } from "../../helper";
import { useState, useRef } from "react";

const Pieces = () => {
  const ref = useRef();
  const [state, setState] = useState(createPosition());

  const calculateCoords = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    console.log(x, y);
    return { x, y };
  };
  const onDrop = (e) => {
    const newPosition = copyPosition(state);
    const { x, y } = calculateCoords(e);
    const [piece, column, row] = e.dataTransfer.getData("text").split(",");
    const intColumn = parseInt(column);
    const intRow = parseInt(row);
    newPosition[intColumn][intRow] = "";
    newPosition[y][x] = piece;
    setState(newPosition);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div ref={ref} onDrop={onDrop} onDragOver={onDragOver} className="pieces">
      {state.map((c, column) =>
        c.map((r, row) =>
          state[column][row] ? (
            <Piece
              key={column + "-" + row}
              row={row}
              column={column}
              piece={state[column][row]}
            />
          ) : null
        )
      )}
    </div>
  );
};
export default Pieces;
