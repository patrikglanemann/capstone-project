import Cell from "./Cell";

export default function Row({ rowData, rowNumber, rowMask, onCellInRowClick }) {
  return (
    <div className="Row">
      {rowData.map((cell, columnNumber) => {
        const isEditable = rowMask[columnNumber] === 0;
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
