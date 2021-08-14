export default function Cell({ value, onClick, id, isEditable }) {
  function handleOnClick() {
    onClick(id);
  }

  return (
    <button onClick={handleOnClick} disabled={isEditable ? false : true}>
      {value}
    </button>
  );
}
