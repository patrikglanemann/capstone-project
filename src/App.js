import "./App.css";
import Cell from "./Cell.js";
import { useEffect, useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([[], [], [], [], [], [], [], [], []]);

  useEffect(() => {
    let url = "https://sugoku.herokuapp.com/board?difficulty=easy";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setNumbers(data.board);
      });
  }, []);
  function renderCellRow(index) {
    const numbArray = numbers[index].map((number, index) => {
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
