import Cell from "../components/Cell.js";
import NumberInput from "../components/NumberInput";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SudokuPage() {
  const [numbers, setNumbers] = useState([[], [], [], [], [], [], [], [], []]);
  const [isLoading, setIsLoading] = useState(false);
  let selectedCell = [];

  useEffect(() => {
    let url = "https://sugoku.herokuapp.com/board?difficulty=easy";
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setNumbers(data.board);
        localStorage.setItem("currentSudoku", JSON.stringify(data.board));
        setIsLoading(false);
      });
  }, []);

  function renderCellRow(rowNumber) {
    if (isLoading || !numbers) {
      return <p>Loading...</p>;
    } else {
      let mask = JSON.parse(localStorage.getItem("currentSudoku"));
      const numbArray = numbers[rowNumber].map((number, columnNumber) => {
        let editable = true;
        if (mask[rowNumber][columnNumber] !== 0) {
          editable = false;
        }
        return (
          <Cell
            key={uuidv4()}
            value={number}
            id={[rowNumber, columnNumber]}
            isEditable={editable}
            onClick={handleCellClick}
          />
        );
      });
      return numbArray;
    }
  }

  function renderNumberBtns() {
    const numbBtns = [...Array(9)].map((item, index) => (
      <NumberInput
        key={uuidv4()}
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
    if (selectedCell.length === 2) {
      let newNumbArr = [...numbers];
      newNumbArr[selectedCell[0]][selectedCell[1]] = value;
      setNumbers(newNumbArr);
    }
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
