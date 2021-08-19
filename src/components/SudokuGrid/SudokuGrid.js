import Row from "./Row.js";

export default function SudokuGrid({
  initialSudoku,
  currentSudoku,
  onCellClick,
}) {
  return (
    <div className="SudokuGrid">
      {currentSudoku.map((row, rowNumber) => (
        <Row
          key={rowNumber}
          rowMask={initialSudoku[rowNumber]}
          onCellInRowClick={onCellClick}
          rowData={row}
          rowNumber={rowNumber}
        />
      ))}
    </div>
  );
}
