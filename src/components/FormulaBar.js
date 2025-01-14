import React, { useState } from "react";

const FormulaBar = ({ selectedCell, updateCell }) => {
  const [formula, setFormula] = useState("");

  const handleFormulaChange = (e) => {
    setFormula(e.target.value);
  };

  const applyFormula = () => {
    if (!selectedCell) return;

    const [row, col] = selectedCell;

    try {
      const result = eval(formula);
      updateCell(`${String.fromCharCode(65 + col)}${row + 1}`, result);
    } catch (error) {
      alert("Invalid formula");
    }
  };

  return (
    <div className="formula-bar">
      <input
        type="text"
        value={formula}
        onChange={handleFormulaChange}
        placeholder="Enter formula"
      />
      <button onClick={applyFormula}>Apply Formula</button>
    </div>
  );
};

export default FormulaBar;
