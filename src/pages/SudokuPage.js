import "./SudokuPage.css";
import SudokuGrid from "../components/SudokuGrid/SudokuGrid.js";
import NumberInputField from "../components/NumberInputField.js";
import ValidateBtn from "../components/ValidateBtn.js";
import cloneMatrix from "../utility/cloneMatrix.js";
import { useEffect, useState, useRef } from "react";

export default function SudokuPage() {
  const [numbers, setNumbers] = useState(Array(9).fill([]));
  const initialNumbers = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [sudokuStatus, setSudokuStatus] = useState("unsolved");
  let selectedCell = [];

  useEffect(() => {
    let url = "https://sugoku.herokuapp.com/board?difficulty=easy";
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setNumbers([...data.board]);
        initialNumbers.current = cloneMatrix(data.board);

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

  function handleSubmitClick(status) {
    setSudokuStatus(status);
  }

  return (
    <>
      {isLoading || !numbers ? (
        <p>Loading...</p>
      ) : (
        <SudokuGrid
          initialSudokuNumbers={initialNumbers.current}
          currentSudokuNumbers={numbers}
          onCellClick={handleCellClick}
        />
      )}
      <NumberInputField onNumberInputClick={handleNumberInputClick} />
      <ValidateBtn
        value={"Submit"}
        onClick={handleSubmitClick}
        numbersArray={numbers}
        url={"https://sugoku.herokuapp.com/validate"}
      />
      <p>{sudokuStatus}</p>
    </>
  );
}
