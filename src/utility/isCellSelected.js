export default function isCellSelected(activeCellID, rowNumber, columnNumber) {
  const isSelected =
    activeCellID.length === 2 &&
    rowNumber === activeCellID[0] &&
    columnNumber === activeCellID[1];

  return isSelected;
}
