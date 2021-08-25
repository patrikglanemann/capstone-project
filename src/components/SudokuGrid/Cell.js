export default function Cell({
  value,
  onCellClick,
  id,
  isEditable,
  isSelected,
}) {
  function handleClick() {
    onCellClick(id);
  }

  return (
    <button
      className={`Cell ${isEditable ? "" : "Cell--locked"} ${
        isSelected ? "Cell--active" : ""
      } ${`CellRow${id[0]}`} ${`CellColumn${id[1]}`}`}
      onClick={handleClick}
      disabled={isEditable ? false : true}
    >
      {value}
    </button>
  );
}
