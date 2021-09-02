import SudokuGrid from "../components/SudokuGrid/SudokuGrid.js";
import NumberInputField from "../components/NumberInputField.js";
import cloneMatrix from "../utility/cloneMatrix.js";
import { useEffect, useState, useRef } from "react";

export default function SudokuPage({ sudokuDifficulty }) {
  const [sudoku, setSudoku] = useState(Array(9).fill([]));
  let initialSudoku = useRef(Array(9).fill([]));
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCell, setSelectedCell] = useState([]);

  useEffect(() => {
    let currentSudoku = JSON.parse(localStorage.getItem("currentSudoku"));
    if (!currentSudoku) {
      const url = `https://sugoku.herokuapp.com/board?difficulty=${sudokuDifficulty}`;
      setIsLoading(true);
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setSudoku(data.board);
          initialSudoku.current = cloneMatrix(data.board);
          try {
            localStorage.setItem(
              "currentSudoku",
              JSON.stringify(cloneMatrix(data.board))
            );
            localStorage.setItem(
              "currentInitialSudoku",
              JSON.stringify(cloneMatrix(data.board))
            );
          } catch (error) {
            console.warn(error);
            alert("There was an error while saving the current initial Sudoku");
          }

          setIsLoading(false);
        })
        .catch((error) => {
          console.warn(error);
        });
    } else {
      let currentInitialSudoku = JSON.parse(
        localStorage.getItem("currentInitialSudoku")
      );
      if (!currentInitialSudoku) {
        alert(
          "Oh no! Some numbers escaped the Zoodoku. Please start a new game"
        );
        currentInitialSudoku = Array(9).fill([]);
      }
      setSudoku(currentSudoku);
      initialSudoku.current = currentInitialSudoku;
    }
  }, []);

  function handleCellClick(cellID) {
    setSelectedCell(cellID);
  }

  function handleNumberInputClick(value) {
    if (selectedCell.length === 2) {
      let newSudoku = [...sudoku];
      newSudoku[selectedCell[0]][selectedCell[1]] = value;
      setSudoku(newSudoku);

      try {
        localStorage.setItem("currentSudoku", JSON.stringify(newSudoku));
      } catch (error) {
        console.warn(error);
        alert("There was an error while saving the current Sudoku");
      }
    }
  }

  return (
    <main className="SudokuPage Content">
      {isLoading || !sudoku ? (
        <SudokuGrid
          initialSudoku={initialSudoku.current}
          currentSudoku={Array(9).fill([0, 0, 0, 0, 0, 0, 0, 0, 0])}
          onCellClick={handleCellClick}
          activeCellID={selectedCell}
        />
      ) : (
        <SudokuGrid
          initialSudoku={initialSudoku.current}
          currentSudoku={sudoku}
          onCellClick={handleCellClick}
          activeCellID={selectedCell}
        />
      )}
      <NumberInputField onNumberInputClick={handleNumberInputClick} />
    </main>
  );
}
