import Cell from "./Cell";
import { v4 as uuidv4 } from "uuid";

export default function Row({
  currentSudokuNumbers,
  rowNumber,
  mask,
  onCellInRowClick,
}) {
  return (
    <div className="Sudoku__row">
      {currentSudokuNumbers[rowNumber].map((number, columnNumber) => {
        const isEditable = mask[rowNumber][columnNumber] !== 0 ? false : true;
        return (
          <Cell
            key={uuidv4()}
            value={number}
            id={[rowNumber, columnNumber]}
            isEditable={isEditable}
            onCellClick={onCellInRowClick}
          />
        );
      })}
    </div>
  );
}
