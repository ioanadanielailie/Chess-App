import React from "react";
import "./rows.css";

const Rows = ({ rows }) => {
  return (
    <div className="rows">
      {rows?.map((row) => (
        <span>{row}</span>
      ))}
    </div>
  );
};
export default Rows;
