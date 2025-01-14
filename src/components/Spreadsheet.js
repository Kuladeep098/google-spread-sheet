import React, { useState } from "react";

const Spreadsheet = ({ data, updateCell, cellStyles }) => {
  const [grid, setGrid] = useState([]);
  const cols = 6; // Define the number of columns for your grid

  const addRow = () => {
    const newGrid = [...grid, Array(cols).fill(null)];
    setGrid(newGrid);
  };

  const removeRow = () => {
    const newGrid = grid.slice(0, grid.length - 1);
    setGrid(newGrid);
  };

  const addColumn = () => {
    const newGrid = grid.map((row) => [...row, null]);
    setGrid(newGrid);
  };

  const removeColumn = () => {
    const newGrid = grid.map((row) => row.slice(0, row.length - 1));
    setGrid(newGrid);
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newGrid = grid.map((row, rIdx) =>
      rIdx === rowIndex
        ? row.map((cell, cIdx) => (cIdx === colIndex ? value : cell))
        : row
    );
    setGrid(newGrid);
    updateCell(`${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`, value);
  };

  const getCellStyle = (rowIndex, colIndex) => {
    const cell = `${String.fromCharCode(65 + colIndex)}${rowIndex + 1}`;
    return cellStyles[cell] || {};
  };

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={removeRow}>Remove Row</button>
        <button onClick={addColumn}>Add Column</button>
        <button onClick={removeColumn}>Remove Column</button>
      </div>

      <table>
        <thead>
          <tr>
            {Array.from({ length: cols }, (_, index) => (
              <th key={index}>{String.fromCharCode(65 + index)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => {
                const cellStyle = getCellStyle(rowIndex, colIndex);
                return (
                  <td key={colIndex}>
                    <input
                      type="text"
                      value={cell || ""}
                      onChange={(e) =>
                        handleCellChange(rowIndex, colIndex, e.target.value)
                      }
                      style={cellStyle}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
