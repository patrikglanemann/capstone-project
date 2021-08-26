import "./App.css";
import { Switch, Route } from "react-router-dom";
import SudokuPage from "./pages/SudokuPage.js";
import MainPage from "./pages/MainPage.js";
import MapPage from "./pages/MapPage.js";
import SummaryPage from "./pages/SummaryPage.js";
import HighscorePage from "./pages/HighscorePage.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/highscore">
          <HighscorePage />
        </Route>
        <Route path="/map">
          <MapPage />
        </Route>
        <Route path="/sudoku/summary">
          <SummaryPage />
        </Route>
        <Route path="/sudoku">
          <SudokuPage />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
