import "./App.css";
import Cell from "./Cell.js";

function App() {
  const sampleGrid = [
    [0, 1, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 6, 7, 0, 9],
    [0, 7, 0, 0, 3, 0, 0, 4, 0],
    [0, 2, 3, 0, 0, 0, 0, 9, 0],
    [0, 0, 0, 0, 0, 1, 0, 2, 7],
    [7, 0, 0, 3, 0, 0, 0, 0, 0],
    [3, 4, 1, 6, 8, 5, 0, 7, 0],
    [5, 6, 7, 0, 2, 0, 8, 0, 0],
    [0, 0, 2, 0, 1, 0, 0, 3, 0],
  ];

  function renderCells() {
    const numbArray = numbers.map((number, index) => {
      return <Cell key={index} value={number} />;
    });
    return numbArray;
  }

  return <div className="App">{renderCells()}</div>;
}

export default App;
