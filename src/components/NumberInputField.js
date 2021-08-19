import NumberInput from "../components/NumberInput";

export default function NumberInputField({ onNumberInputClick }) {
  return (
    <div className="NumbInputField">
      {[...Array(9)].map((item, index) => (
        <NumberInput
          key={`${index + 1}`}
          onClick={onNumberInputClick}
          value={index + 1}
        />
      ))}
    </div>
  );
}
