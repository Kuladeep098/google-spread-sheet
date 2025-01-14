import React, { useState } from "react";
import Spreadsheet from "./components/Spreadsheet";
import Toolbar from "./components/Toolbar";
import FormulaBar from "./components/FormulaBar";
import Chart from "./components/Chart";

const App = () => {
  const [data, setData] = useState({});
  const [selectedCell, setSelectedCell] = useState(null);
  const [results, setResults] = useState("");
  const [cellStyles, setCellStyles] = useState({});

  // Validate the input as date, number, or string
  const validateInput = (value) => {
    const trimmedValue = value.trim(); // Trim leading/trailing spaces
    if (!trimmedValue) return "string"; // Treat empty strings as string type

    const date = new Date(trimmedValue);
    if (!isNaN(date.getTime())) {
      return "date";
    }

    if (!isNaN(Number(trimmedValue))) {
      return "number";
    }

    return "string";
  };

  // Update the data for a specific cell
  const updateCell = (cell, value) => {
    setData((prev) => ({
      ...prev,
      [cell]: value,
    }));
  };

  // Validate input before updating the cell
  const validateCell = (cell, value) => {
    const type = validateInput(value);
    if (type === "date" || type === "number" || type === "string") {
      updateCell(cell, value);
    } else {
      alert("Invalid data type! Please enter a valid number, text, or date.");
    }
  };

  // Save data to localStorage
  const saveData = () => {
    localStorage.setItem("spreadsheetData", JSON.stringify(data));
    alert("Spreadsheet saved!");
  };

  // Load data from localStorage
  const loadData = () => {
    const savedData = JSON.parse(localStorage.getItem("spreadsheetData"));
    if (savedData) {
      setData(savedData);
      alert("Spreadsheet loaded!");
    } else {
      alert("No saved data found.");
    }
  };

  // Test function to display current data in the console
  const testFunctions = () => {
    const testResult = Object.entries(data).map(([cell, value]) => {
      return `${cell}: ${value}`;
    });
    setResults(testResult.join("\n"));
  };

  // Calculate operations based on selected cells
  const calculate = (operation) => {
    const selectedCells = Object.entries(data);
    const values = selectedCells
      .map(([cell, value]) => parseFloat(value))
      .filter((val) => !isNaN(val));

    if (values.length === 0) return;

    let result = 0;
    switch (operation) {
      case "SUM":
        result = values.reduce((a, b) => a + b, 0);
        break;
      case "AVERAGE":
        result = values.reduce((a, b) => a + b, 0) / values.length;
        break;
      case "MAX":
        result = Math.max(...values);
        break;
      case "MIN":
        result = Math.min(...values);
        break;
      case "COUNT":
        result = values.length;
        break;
      default:
        break;
    }
    setResults(`${operation}: ${result}`);
  };

  // Toggle cell style (bold, italic)
  const toggleCellStyle = (cell, style) => {
    setCellStyles((prevStyles) => {
      const currentStyles = prevStyles[cell] || {};
      return {
        ...prevStyles,
        [cell]: {
          ...currentStyles,
          [style]: !currentStyles[style],
        },
      };
    });
  };

  // Update font size of a cell
  const updateFontSize = (cell, size) => {
    setCellStyles((prevStyles) => {
      const currentStyles = prevStyles[cell] || {};
      return {
        ...prevStyles,
        [cell]: {
          ...currentStyles,
          fontSize: size,
        },
      };
    });
  };

  // Update font color of a cell
  const updateFontColor = (cell, color) => {
    setCellStyles((prevStyles) => {
      const currentStyles = prevStyles[cell] || {};
      return {
        ...prevStyles,
        [cell]: {
          ...currentStyles,
          color,
        },
      };
    });
  };

  return (
    <div className="app-container">
      <Toolbar
        onTrim={() => {}}
        onUppercase={() => {}}
        onLowercase={() => {}}
        onRemoveDuplicates={() => {}}
        onFindAndReplace={() => {}}
        onSave={saveData}
        onLoad={loadData}
        onCalculate={calculate}
        onToggleStyle={toggleCellStyle}
        updateFontSize={updateFontSize}
        updateFontColor={updateFontColor}
      />
      <FormulaBar selectedCell={selectedCell} updateCell={updateCell} />
      <Spreadsheet
        data={data}
        setSelectedCell={setSelectedCell}
        updateCell={validateCell}
        cellStyles={cellStyles}
      />
      <button onClick={testFunctions}>Test Functions</button>
      <pre className="results">{results}</pre>
      <Chart data={data} />
    </div>
  );
};

export default App;
