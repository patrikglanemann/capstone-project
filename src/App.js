import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SudokuPage from "./pages/SudokuPage.js";

export default function App() {
  return (
    <Router>
      <main className="Content">
        <Switch>
          <Route path="/">
            <SudokuPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
