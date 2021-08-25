import "./SudokuPage.css";
import SudokuGrid from "../components/SudokuGrid/SudokuGrid.js";
import NumberInputField from "../components/NumberInputField.js";
import SubmitBtn from "../components/SubmitBtn.js";
import cloneMatrix from "../utility/cloneMatrix.js";
import { useEffect, useState, useRef } from "react";

export default function SudokuPage() {
  const [sudoku, setSudoku] = useState(Array(9).fill([]));
  let initialSudoku = useRef(Array(9).fill([]));
  const [isLoading, setIsLoading] = useState(false);
  const [sudokuStatus, setSudokuStatus] = useState("unsolved");
  const [selectedCell, setSelectedCell] = useState([]);

  useEffect(() => {
    const url = "https://sugoku.herokuapp.com/board?difficulty=easy";
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setSudoku(data.board);
        initialSudoku.current = cloneMatrix(data.board);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  function handleCellClick(cellID) {
    setSelectedCell(cellID);
  }

  function handleNumberInputClick(value) {
    if (selectedCell.length === 2) {
      let newSudoku = [...sudoku];
      newSudoku[selectedCell[0]][selectedCell[1]] = value;
      setSudoku(newSudoku);
    }
  }

  function handleSubmitClick(status) {
    setSudokuStatus(status);
  }

  return (
    <div className="SudokuPage App__gridLayout">
      <header className="Header">
        <div className="Header__topImage">
          <h1 className="Header__title">Room01</h1>
          <h2 className="Header__subTitle">easy</h2>
        </div>
      </header>
      <main className="Content">
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
        <SubmitBtn
          value={"Submit"}
          onClick={handleSubmitClick}
          validateData={sudoku}
          url={"https://sugoku.herokuapp.com/validate"}
        />
        <h4>{sudokuStatus}</h4>
      </main>
    </div>
  );
}
