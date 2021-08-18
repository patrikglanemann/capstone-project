export default function Cell({ value, onCellClick, id, isEditable }) {
  function handleClick() {
    onCellClick(id);
  }

  return (
    <button onClick={handleClick} disabled={isEditable ? false : true}>
      {value}
    </button>
  );
}
