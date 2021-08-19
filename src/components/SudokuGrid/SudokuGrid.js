import Row from "./Row.js";
import { v4 as uuidv4 } from "uuid";

export default function SudokuGrid({
  initialSudokuNumbers,
  currentSudokuNumbers,
  onCellClick,
}) {
  return (
    <div className="Sudoku__grid">
      {[...Array(9)].map((item, rowNumber) => (
        <Row
          key={uuidv4()}
          mask={initialSudokuNumbers}
          onCellInRowClick={onCellClick}
          currentSudokuNumbers={currentSudokuNumbers}
          rowNumber={rowNumber}
        />
      ))}
    </div>
  );
}
