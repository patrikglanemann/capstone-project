import Cell from "./Cell";
import isCellSelected from "../../utility/isCellSelected";

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
        return (
          <Cell
            key={`${rowNumber}-${columnNumber}`}
            value={cell === 0 || (cell === "X" ? "" : cell)}
            id={[rowNumber, columnNumber]}
            isEditable={isEditable}
            onCellClick={onCellInRowClick}
            isSelected={isCellSelected(activeCellID, rowNumber, columnNumber)}
          />
        );
      })}
    </div>
  );
}
