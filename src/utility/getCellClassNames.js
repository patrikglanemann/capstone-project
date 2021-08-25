export default function getCellClassNames(isEditable, isSelected, cellID) {
  const cellClassNames = `Cell ${isEditable ? "" : "Cell--locked"} ${
    isSelected ? "Cell--active" : ""
  } ${`CellRow${cellID[0]}`} ${`CellColumn${cellID[1]}`}`;

  return cellClassNames;
}
