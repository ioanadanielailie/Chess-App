import React from "react";
import "./chessboard.css";
import "../../constants.css";
import { getCharacter } from "../../helper";
import Rows from "../Chessboard/GridComponents/Rows";
import Columns from "../Chessboard/GridComponents/Columns";
import "../Chessboard/GridComponents/rows.css";
import Pieces from "../Pieces/Pieces";
const Chessboard = () => {
  const getClassName = (i, j) => {
    let c = "square-";
    c += (i + j) % 2 === 0 ? "black" : "white";
    return c;
  };
  const rowsNumber = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const columnsNumber = Array(8)
    .fill()
    .map((x, i) => i + 1);

  return (
    <div className="chessboard">
      <Rows rows={rowsNumber} />
      <div className="squares">
        {rowsNumber.map((rowNumber, i) =>
          columnsNumber.map((columnNumber, j) => (
            <div
              key={columnNumber + "-" + rowNumber}
              className={getClassName(9 - i, j)}
            ></div>
          ))
        )}
      </div>
      <Pieces />
      <Columns columns={columnsNumber} />
    </div>
  );
};
export default Chessboard;
