import Cell from "./Cell";
import { v4 as uuidv4 } from "uuid";

export default function Row({
  currentSudokuNumbers,
  rowNumber,
  mask,
  onClick,
}) {
  function handleCellClick(cellID) {
    onClick(cellID);
  }

  return (
    <div className="Sudoku__row">
      {currentSudokuNumbers[rowNumber].map((number, columnNumber) => {
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
      })}
    </div>
  );
}
