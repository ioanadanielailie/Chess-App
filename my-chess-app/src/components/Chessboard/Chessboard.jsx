import React from "react";
import "./chessboard.css";
import { getCharacter } from "../../helper";
import Rows from "../Chessboard/GridComponents/Rows";
import Columns from "../Chessboard/GridComponents/Columns";
import "../Chessboard/GridComponents/rows.css";
const Chessboard = () => {
  const getClassName = (i, j) => {
    let c = "square-";
    c += (i + j) % 2 === 0 ? "white" : "black";
    console.log(c);
    return c;
  };
  const rowsNumber = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const columnsNumber = Array(8)
    .fill()
    .map((x, i) => getCharacter(i));

  return (
    <div className="chessboard">
      <Rows rows={rowsNumber} />
      <div className="squares">
        {rowsNumber.map((rowNumber, i) =>
          columnsNumber.map((columnNumber, j) => (
            <div
              key={columnNumber + "-" + rowNumber}
              className={getClassName(i, j)}
            ></div>
          ))
        )}
      </div>
      <Columns columns={columnsNumber} />
    </div>
  );
};
export default Chessboard;
