import React, { useState } from "react";

// Toolbar Component
const Toolbar = ({
  onSave,
  onLoad,
  onCalculate,
  onTrim,
  onUppercase,
  onLowercase,
  onRemoveDuplicates,
  onFindAndReplace,
  updateFontSize,
  updateFontColor,
  updateFontStyle,
}) => {
  const [showFontSizeOptions, setShowFontSizeOptions] = useState(false);

  // Toggle the visibility of font size options
  const toggleFontSizeOptions = () => {
    setShowFontSizeOptions(!showFontSizeOptions);
  };

  return (
    <div style={styles.toolbar}>
      {/* Save and Load Buttons */}
      <div style={styles.buttonGroup}>
        <button onClick={onSave} style={styles.button}>
          Save
        </button>
        <button onClick={onLoad} style={styles.button}>
          Load
        </button>
      </div>

      <Separator />

      {/* Calculation Buttons */}
      <div style={styles.buttonGroup}>
        <button onClick={() => onCalculate("SUM")} style={styles.button}>
          SUM
        </button>
        <button onClick={() => onCalculate("AVERAGE")} style={styles.button}>
          AVERAGE
        </button>
        <button onClick={() => onCalculate("MAX")} style={styles.button}>
          MAX
        </button>
        <button onClick={() => onCalculate("MIN")} style={styles.button}>
          MIN
        </button>
        <button onClick={() => onCalculate("COUNT")} style={styles.button}>
          COUNT
        </button>
      </div>

      <Separator />

      {/* Text Transformation Buttons */}
      <div style={styles.buttonGroup}>
        <button onClick={onTrim} style={styles.button}>
          Trim
        </button>
        <button onClick={onUppercase} style={styles.button}>
          Uppercase
        </button>
        <button onClick={onLowercase} style={styles.button}>
          Lowercase
        </button>
        <button onClick={onRemoveDuplicates} style={styles.button}>
          Remove Duplicates
        </button>
        <button onClick={onFindAndReplace} style={styles.button}>
          Find & Replace
        </button>
      </div>

      <Separator />

      {/* Font Size Toggle Button */}
      <button onClick={toggleFontSizeOptions} style={styles.button}>
        Font Size
      </button>

      {/* Font Size Options (conditionally rendered) */}
      {showFontSizeOptions && (
        <div style={styles.buttonGroup}>
          <button onClick={() => updateFontSize("10px")} style={styles.button}>
            Font Size 10
          </button>
          <button onClick={() => updateFontSize("12px")} style={styles.button}>
            Font Size 12
          </button>
          <button onClick={() => updateFontSize("14px")} style={styles.button}>
            Font Size 14
          </button>
          <button onClick={() => updateFontSize("16px")} style={styles.button}>
            Font Size 16
          </button>
          <button onClick={() => updateFontSize("20px")} style={styles.button}>
            Font Size 20
          </button>
        </div>
      )}

      <div style={styles.buttonGroup}>
        <button
          onClick={() => updateFontColor("red")}
          style={{ ...styles.button, backgroundColor: "red" }}
        >
          Red Font
        </button>
        <button
          onClick={() => updateFontColor("blue")}
          style={{ ...styles.button, backgroundColor: "blue" }}
        >
          Blue Font
        </button>
      </div>

      <Separator />

      {/* Font Weight and Style Buttons */}
      <div style={styles.buttonGroup}>
        <button onClick={() => updateFontStyle("bold")} style={styles.button}>
          Bold
        </button>
        <button onClick={() => updateFontStyle("italic")} style={styles.button}>
          Italics
        </button>
      </div>
    </div>
  );
};

// Separator Component for separating button groups
const Separator = () => <div style={styles.separator}></div>;

// Inline styles for the toolbar
const styles = {
  toolbar: {
    display: "flex",
    flexDirection: "column", // Updated to allow for better vertical alignment
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderBottom: "2px solid #ccc",
  },
  button: {
    padding: "8px 10px",
    fontSize: "14px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    margin: "1px 5px",
    transition: "background-color 0.3s",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "9px 0",
  },
  separator: {
    borderLeft: "2px solid #ccc",
    height: "0.3px",
    margin: "0.3px 0",
  },
};

export default Toolbar;
