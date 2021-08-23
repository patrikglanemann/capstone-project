import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SudokuPage from "./pages/SudokuPage.js";
import MainPage from "./pages/MainPage.js";
import MapPage from "./pages/MapPage.js";
import SummaryPage from "./pages/SummaryPage.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
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
      </div>
    </Router>
  );
}
