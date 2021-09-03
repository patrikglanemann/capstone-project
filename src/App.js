import "./App.css";
import { useHistory } from "react-router";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SudokuPage from "./pages/SudokuPage.js";
import MainPage from "./pages/MainPage.js";
import MapPage from "./pages/MapPage.js";
import SummaryPage from "./pages/SummaryPage.js";
import HighscorePage from "./pages/HighscorePage.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  const history = useHistory();
  const [sudokuDifficulty, setSudokuDifficulty] = useState("");
  const [isRoomSelected, setIsRoomSelected] = useState(false);
  const currentDifficulty =
    JSON.parse(localStorage.getItem("currentDifficulty")) || "???";

  useEffect(() => {
    setSudokuDifficulty(currentDifficulty);

    if (JSON.parse(localStorage.getItem("currentSudoku"))) {
      setIsRoomSelected(true);
    }
  });

  function handleRoomClick(newDifficulty) {
    setSudokuDifficulty(newDifficulty);
    setIsRoomSelected(true);
  }

  function handleOnEnterClick() {
    if (!isRoomSelected) {
      alert("Please select a room.");
    }
  }

  function handleOnSubmitClick() {
    const isSubmit = confirm(
      "Do you want to submit your Sukoku? If it is wrong or not finfished you will be defeated!"
    );
    if (isSubmit) {
      history.push("/sudoku/summary", { from: "SummaryPage" });
    }
  }

  function handleDoneClick() {
    setIsRoomSelected(false);
  }

  return (
    <div className="App">
      <Header sudokuDifficulty={sudokuDifficulty} />
      <Switch>
        <Route path="/highscore">
          <HighscorePage />
        </Route>
        <Route path="/map">
          <MapPage onRoomClick={handleRoomClick} />
        </Route>
        <Route path="/sudoku/summary">
          <SummaryPage onDoneClick={handleDoneClick} />
        </Route>
        <Route path="/sudoku">
          <SudokuPage sudokuDifficulty={sudokuDifficulty} />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer
        onEnterClick={handleOnEnterClick}
        onSubmitClick={handleOnSubmitClick}
        isRoomSelected={isRoomSelected}
      />
    </div>
  );
}
