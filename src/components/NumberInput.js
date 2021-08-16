import "./NumberInput.css";

export default function NumberInput({ onClick, value }) {
  function handleBtnClick() {
    onClick(value);
  }

  return (
    <button className="NumbInputField__btn" onClick={handleBtnClick}>
      {value}
    </button>
  );
}
