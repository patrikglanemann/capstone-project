import "./App.css";
import Cell from "./Cell.js";
import NumberInput from "./NumberInput";
import { useEffect, useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([[], [], [], [], [], [], [], [], []]);
  let selectedCell = [0, 0];

  useEffect(() => {
    let url = "https://sugoku.herokuapp.com/board?difficulty=easy";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setNumbers(data.board);
      });
  }, []);

  function renderCellRow(rowNumber) {
    const numbArray = numbers[rowNumber].map((number, index) => {
      return (
        <Cell
          key={index}
          value={number}
          id={[rowNumber, index]}
          onClick={handleCellClick}
        />
      );
    });
    return numbArray;
  }

  function renderNumberBtns() {
    const numbBtns = [...Array(9)].map((item, index) => (
      <NumberInput
        key={index}
        onClick={handleNumberInputClick}
        value={index + 1}
      />
    ));
    return numbBtns;
  }

  function handleCellClick(cellID) {
    selectedCell = cellID;
  }

  function handleNumberInputClick(value) {
    let newNumbArr = [...numbers];
    newNumbArr[selectedCell[0]][selectedCell[1]] = value;
    setNumbers(newNumbArr);
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
      <div className="NumbInputField">{renderNumberBtns()}</div>
    </div>
  );
}

export default App;
