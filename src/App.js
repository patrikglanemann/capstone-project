import "./App.css";
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
  const [sudokuDifficulty, setSudokuDifficulty] = useState("");
  const [isRoomSelected, setIsRoomSelected] = useState(false);

  useEffect(() => {
    let currentDifficulty = JSON.parse(
      localStorage.getItem("currentDifficulty")
    );
    if (!currentDifficulty) {
      currentDifficulty = "???";
    }
    setSudokuDifficulty(currentDifficulty);

    if (JSON.parse(localStorage.getItem("currentSudoku")) !== null) {
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
          <SummaryPage />
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
        isRoomSelected={isRoomSelected}
      />
    </div>
  );
}
