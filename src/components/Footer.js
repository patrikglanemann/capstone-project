import "./Footer.css";
import { NavLink, Switch, Route } from "react-router-dom";

export default function Footer({
  onEnterClick,
  isRoomSelected,
  onSubmitClick,
}) {
  function handleEnterClick() {
    onEnterClick();
  }

  function handleSubmitClick() {
    onSubmitClick();
  }

  return (
    <footer className="Footer">
      <nav className="Footer__navBar">
        <Switch>
          <Route path="/highscore">
            <NavLink to="/">
              <button className="Footer__btn Footer__btn--left">Back</button>
            </NavLink>
          </Route>
          <Route path="/map">
            <NavLink to="/">
              <button className="Footer__btn Footer__btn--left">Back</button>
            </NavLink>
            <NavLink to={isRoomSelected ? "/sudoku" : "/map"}>
              <button
                className="Footer__btn Footer__btn--right"
                onClick={handleEnterClick}
              >
                Enter
              </button>
            </NavLink>
          </Route>
          <Route path="/sudoku/summary"></Route>
          <Route path="/sudoku">
            <NavLink to="/map">
              <button className="Footer__btn Footer__btn--left">Back</button>
            </NavLink>
            <button
              className="Footer__btn Footer__btn--right"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
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
