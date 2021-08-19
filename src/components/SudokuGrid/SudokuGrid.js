import Row from "./Row.js";

export default function SudokuGrid({
  initialSudokuNumbers,
  currentSudokuNumbers,
  onCellClick,
}) {
  return (
    <div className="Sudoku__grid">
      {[...Array(9)].map((item, rowNumber) => (
        <Row
          key={rowNumber}
          mask={initialSudokuNumbers}
          onCellInRowClick={onCellClick}
          currentSudokuNumbers={currentSudokuNumbers}
          rowNumber={rowNumber}
        />
      ))}
    </div>
  );
}
