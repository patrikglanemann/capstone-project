import Cell from "./Cell";

export default function Row({
  currentSudoku,
  rowNumber,
  mask,
  onCellInRowClick,
}) {
  return (
    <div className="Sudoku__row">
      {currentSudoku[rowNumber].map((number, columnNumber) => {
        const isEditable = mask[rowNumber][columnNumber] !== 0 ? false : true;
        return (
          <Cell
            key={`${rowNumber}-${columnNumber}`}
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
