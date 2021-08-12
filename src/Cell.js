export default function Cell({ value, onClick }) {
  function handleOnClick() {
    onClick();
  }

  return <button onClick={handleOnClick}>{value}</button>;
}
