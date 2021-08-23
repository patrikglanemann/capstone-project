import Cell from "./Cell";

export default function Row({
  rowData,
  rowNumber,
  rowMask,
  onCellInRowClick,
  activeCellID,
}) {
  return (
    <div className="Row">
      {rowData.map((cell, columnNumber) => {
        const isEditable = rowMask[columnNumber] === 0;
        const isSelected =
          activeCellID.length === 2 &&
          rowNumber === activeCellID[0] &&
          columnNumber === activeCellID[1];

        return (
          <Cell
            key={`${rowNumber}-${columnNumber}`}
            value={cell}
            id={[rowNumber, columnNumber]}
            isEditable={isEditable}
            onCellClick={onCellInRowClick}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
}
