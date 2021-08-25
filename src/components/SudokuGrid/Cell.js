import getCellClassNames from "../../utility/getCellClassNames.js";

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
      className={getCellClassNames(isEditable, isSelected, id)}
      onClick={handleClick}
      disabled={isEditable ? false : true}
    >
      {value}
    </button>
  );
}
