import "./SudokuPage.css";
import SudokuGrid from "../components/SudokuGrid/SudokuGrid.js";
import NumberInputField from "../components/NumberInputField.js";
import { useEffect, useState } from "react";

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
      {isLoading || !numbers ? (
        <p>Loading...</p>
      ) : (
        <SudokuGrid
          initialSudokuNumbers={JSON.parse(
            localStorage.getItem("currentSudoku")
          )}
          currentSudokuNumbers={numbers}
          onClick={handleCellClick}
        />
      )}
      <NumberInputField onNumberInputClick={handleNumberInputClick} />
      <button className="SubmitBtn" onClick={handleSubmitClick}>
        Submit
      </button>
      <p>{sudokuStatus}</p>
    </>
  );
}
