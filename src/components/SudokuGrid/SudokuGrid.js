import Row from "./Row.js";

export default function SudokuGrid({
  initialSudoku,
  currentSudoku,
  onCellClick,
}) {
  return (
    <div className="Sudoku__grid">
      {[...Array(9)].map((item, rowNumber) => (
        <Row
          key={rowNumber}
          mask={initialSudoku}
          onCellInRowClick={onCellClick}
          currentSudokuNumbers={currentSudoku}
          rowNumber={rowNumber}
        />
      ))}
    </div>
  );
}
