import Cell from "./Cell";

export default function Row({ rowData, rowNumber, mask, onCellInRowClick }) {
  return (
    <div className="Sudoku__row">
      {rowData.map((cell, columnNumber) => {
        const isEditable = mask[rowNumber][columnNumber] !== 0 ? false : true;
        return (
          <Cell
            key={`${rowNumber}-${columnNumber}`}
            value={cell}
            id={[rowNumber, columnNumber]}
            isEditable={isEditable}
            onCellClick={onCellInRowClick}
          />
        );
      })}
    </div>
  );
}
