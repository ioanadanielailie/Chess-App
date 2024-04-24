import React from "react";
import "./columns.css";

const Columns = ({ columns }) => {
  return (
    <div className="columns">
      {columns?.map((column) => (
        <span>{column}</span>
      ))}
    </div>
  );
};
export default Columns;
