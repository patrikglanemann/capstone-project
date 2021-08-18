import "./SudokuPage.css";
import Cell from "../components/Cell.js";
import NumberInputField from "../components/NumberInputField.js";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function SudokuPage() {
  const [numbers, setNumbers] = useState([[], [], [], [], [], [], [], [], []]);
  const [isLoading, setIsLoading] = useState(false);
  const [sudokuStatus, setSudokuStatus] = useState("unsolved");
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

  function handleSubmitClick() {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? "" : "%2C"
          }`,
        ""
      );

    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
        .join("&");
    const data = {
      board: numbers,
    };

    fetch("https://sugoku.herokuapp.com/validate", {
      method: "POST",
      body: encodeParams(data),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then((response) => setSudokuStatus(response.status))
      .catch(console.warn);
  }

  return (
    <>
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
      <NumberInputField onNumberInputClick={handleNumberInputClick} />
      <button className="SubmitBtn" onClick={handleSubmitClick}>
        Submit
      </button>
      <p>{sudokuStatus}</p>
    </>
  );
}
