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

  function renderCellRow(index) {
    const numbArray = sampleGrid[index].map((number, index) => {
      return <Cell key={index} value={number} />;
    });
    return numbArray;
  }

  return (
    <div className="App">
      <div className="Sudoku__grid">
        <div className="Sudoku__row">{renderCellRow(0)}</div>
        <div className="Sudoku__row">{renderCellRow(1)}</div>
        <div className="Sudoku__row">{renderCellRow(2)}</div>
        <div className="Sudoku__row">{renderCellRow(3)}</div>
        <div className="Sudoku__row">{renderCellRow(4)}</div>
        <div className="Sudoku__row">{renderCellRow(5)}</div>
        <div className="Sudoku__row">{renderCellRow(6)}</div>
        <div className="Sudoku__row">{renderCellRow(7)}</div>
        <div className="Sudoku__row">{renderCellRow(8)}</div>
      </div>
    </div>
  );
}

export default App;
