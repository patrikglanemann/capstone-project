import "./App.css";
import { useHistory, useLocation } from "react-router";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SudokuPage from "./pages/SudokuPage.js";
import MainPage from "./pages/MainPage.js";
import MapPage from "./pages/MapPage.js";
import SummaryPage from "./pages/SummaryPage.js";
import HighscorePage from "./pages/HighscorePage.js";
import ProfilePage from "./pages/ProfilePage.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  const history = useHistory();
  const location = useLocation();
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

  function handleOnStartClick() {
    history.push("/map", { from: "MainPage" });
  }

  function handleOnBackClick() {
    if (location.pathname === "/sudoku") {
      history.push("/map");
    } else {
      history.push("/");
    }
  }

  function handleOnEnterClick() {
    if (!isRoomSelected) {
      alert("Please select a room.");
    }
    history.push(isRoomSelected ? "/sudoku" : "/map", {
      from: "MapPage",
    });
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

  function handleRoomClick(newDifficulty) {
    setSudokuDifficulty(newDifficulty);
    setIsRoomSelected(true);
  }

  return (
    <div className="App">
      <Header sudokuDifficulty={sudokuDifficulty} />
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
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
        onStartClick={handleOnStartClick}
        onBackClick={handleOnBackClick}
        onEnterClick={handleOnEnterClick}
        onSubmitClick={handleOnSubmitClick}
      />
    </div>
  );
}
