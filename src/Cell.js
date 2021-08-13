export default function Cell({ value, onClick, id }) {
  function handleOnClick() {
    onClick(id);
  }

  return <button onClick={handleOnClick}>{value}</button>;
}
