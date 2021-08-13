import "./NumberInput.css";

export default function NumberInput({ onClick, value }) {
  function handleBtnClick() {
    onClick(value);
  }

  return <button onClick={handleBtnClick}>{value}</button>;
}
