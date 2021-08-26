import "./Footer.css";
import { NavLink, Switch, Route } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <nav className="Footer__navBar">
        <Switch>
          <Route path="/highscore">
            <NavLink to="/">
              <button className="Footer__btn">Back</button>
            </NavLink>
          </Route>
          <Route path="/map">
            <NavLink to="/">
              <button className="Footer__btn">Back</button>
            </NavLink>
            <NavLink to="/sudoku">
              <button className="Footer__btn">Enter</button>
            </NavLink>
          </Route>
          <Route path="/sudoku/summary">
            <NavLink to="/">
              <button className="Footer__btn">Done</button>
            </NavLink>
          </Route>
          <Route path="/sudoku">
            <NavLink to="/map">
              <button className="Footer__btn Footer__btn--left">Back</button>
            </NavLink>
            <NavLink to="/sudoku/summary">
              <button className="Footer__btn Footer__btn--right">Submit</button>
            </NavLink>
          </Route>
          <Route path="/">
            <div className="Footer__topImage">
              <NavLink to="/map">
                <button className="Footer__btn StartBtn">Start</button>
              </NavLink>
            </div>
          </Route>
        </Switch>
      </nav>
    </footer>
  );
}
