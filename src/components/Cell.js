import React from "react";

const Cell = ({ cell, value, onClick, onChange, style }) => {
  return (
    <div className="cell" onClick={onClick} style={style}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cell-input"
      />
    </div>
  );
};

export default Cell;
