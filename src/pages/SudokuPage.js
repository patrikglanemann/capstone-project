import "./SudokuPage.css";
import SudokuGrid from "../components/SudokuGrid/SudokuGrid.js";
import NumberInputField from "../components/NumberInputField.js";
import ValidateBtn from "../components/ValidateBtn.js";
import cloneMatrix from "../utility/cloneMatrix.js";
import { useEffect, useState, useRef } from "react";

export default function SudokuPage() {
  const [sudoku, setSudoku] = useState(Array(9).fill([]));
  const initialSudoku = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [sudokuStatus, setSudokuStatus] = useState("unsolved");
  let selectedCell = [];

  useEffect(() => {
    let url = "https://sugoku.herokuapp.com/board?difficulty=easy";
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setSudoku([...data.board]);
        initialSudoku.current = cloneMatrix(data.board);

        setIsLoading(false);
      });
  }, []);

  function handleCellClick(cellID) {
    selectedCell = cellID;
  }

  function handleNumberInputClick(value) {
    if (selectedCell.length === 2) {
      let newNumbArr = [...sudoku];
      newNumbArr[selectedCell[0]][selectedCell[1]] = value;
      setSudoku(newNumbArr);
    }
  }

  function handleSubmitClick(status) {
    setSudokuStatus(status);
  }

  return (
    <>
      {isLoading || !sudoku ? (
        <p>Loading...</p>
      ) : (
        <SudokuGrid
          initialSudoku={initialSudoku.current}
          currentSudoku={sudoku}
          onCellClick={handleCellClick}
        />
      )}
      <NumberInputField onNumberInputClick={handleNumberInputClick} />
      <ValidateBtn
        value={"Submit"}
        onClick={handleSubmitClick}
        validateData={sudoku}
        url={"https://sugoku.herokuapp.com/validate"}
      />
      <p>{sudokuStatus}</p>
    </>
  );
}
