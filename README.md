# google-spread-sheet
Created with CodeSandbox
README file :-


Web Application Mimicking Google Sheets
Introduction
This project is a React-based web application designed to mimic basic functionalities of Google Sheets. Users can enter data into a grid, apply formulas, and customize cell styles, offering a simple and interactive spreadsheet experience.
Features
Dynamic Grid: Add/remove rows and columns.
Data Input and Validation: Supports numbers, dates, and strings with validation.
Basic Operations: SUM, AVERAGE, MAX, MIN, and COUNT operations can be performed on selected cells.
Formula Bar: Allows entering and applying formulas.
Data Persistence: Save and load spreadsheet data using localStorage.
Chart Integration: Displays a line chart based on entered data.
Text and Style Manipulation:
oTrim, uppercase, and lowercase transformations.
oRemove duplicates and find & replace functionality.
oFont size and color customization.
oBold and italic text styling.
File Structure
App.js: Main application logic and state management.
Index.js: Renders the main component.
Styles.css: Contains global styles and specific component styles.
Components:
oToolbar.js: Contains buttons for operations, style changes, and text transformations.
oFormulaBar.js: Handles formula input and application.
oSpreadsheet.js: Manages the grid and data input.
oCell.js: Represents an individual cell in the grid.
oChart.js: Renders a line chart using Chart.js.
How to Run
·  Clone the repository.
·  Navigate to the project directory and run:
npm install
npm start
·  Open the browser and go to http://localhost:3000.
Dependencies
React: Frontend framework for building the user interface.
Chart.js: Library for rendering charts.
React-Chartjs-2: React wrapper for Chart.js.
Future Improvements
Add support for more complex formulas.
Enable cell merging functionality.
Implement data export to CSV or Excel formats.
Screenshots :-

<img width="415" alt="image" src="https://github.com/user-attachments/assets/5988e2b9-3a96-464e-8114-5abe0fa22ee9" />

<img width="415" alt="image" src="https://github.com/user-attachments/assets/45c1a302-2f81-4261-9263-5de054536c09" />
