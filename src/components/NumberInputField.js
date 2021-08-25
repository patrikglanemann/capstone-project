import NumberInput from "../components/NumberInput";

export default function NumberInputField({ onNumberInputClick }) {
  return (
    <div className="NumbInputField">
      {[...Array(10)].map((item, index) => (
        <NumberInput
          key={`${index + 1}`}
          onClick={onNumberInputClick}
          value={index < 9 ? index + 1 : "X"}
        />
      ))}
    </div>
  );
}
