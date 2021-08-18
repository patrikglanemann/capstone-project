import NumberInput from "../components/NumberInput";
import { v4 as uuidv4 } from "uuid";

export default function NumberInputField({ onNumberInputClick }) {
  return (
    <div className="NumbInputField">
      {[...Array(9)].map((item, index) => (
        <NumberInput
          key={uuidv4()}
          onClick={onNumberInputClick}
          value={index + 1}
        />
      ))}
    </div>
  );
}
