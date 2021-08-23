import "./SudokuPage.css";
import SudokuGrid from "../components/SudokuGrid/SudokuGrid.js";
import NumberInputField from "../components/NumberInputField.js";
import SubmitBtn from "../components/SubmitBtn.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import cloneMatrix from "../utility/cloneMatrix.js";
import { useEffect, useState, useRef } from "react";

export default function SudokuPage() {
  const [sudoku, setSudoku] = useState(Array(9).fill([]));
  let initialSudoku = useRef(Array(9).fill([]));
  const [isLoading, setIsLoading] = useState(false);
  const [sudokuStatus, setSudokuStatus] = useState("unsolved");
  let [selectedCell, setSelectedCell] = useState([]);

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
    <div className="SudokuPage">
      <Header title="Room01" subTitle="Easy" />
      <main className="SudokuPage__Content">
        {isLoading || !sudoku ? (
          <p>Loading...</p>
        ) : (
          <SudokuGrid
            initialSudoku={initialSudoku.current}
            currentSudoku={sudoku}
            onCellClick={handleCellClick}
            activeCellID={selectedCell}
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
      <Footer
        path01="/map"
        text01="Back"
        path02="/sudoku/summary"
        text02="Submit"
      />
    </div>
  );
}
