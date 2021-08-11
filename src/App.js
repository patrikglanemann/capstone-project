import "./App.css";
import Cell from "./Cell.js";

function App() {
  const numbers = [8, 3, 2];

  function renderCells() {
    const numbArray = numbers.map((number, index) => {
      return <Cell key={index} value={number} />;
    });
    return numbArray;
  }

  return <div className="App">{renderCells()}</div>;
}

export default App;
