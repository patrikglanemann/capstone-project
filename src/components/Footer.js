import "./Footer.css";
import { Switch, Route } from "react-router-dom";

export default function Footer({
  onEnterClick,
  onSubmitClick,
  onBackClick,
  onStartClick,
}) {
  return (
    <footer className="Footer">
      <nav className="Footer__navBar">
        <Switch>
          <Route path="/profile">
            <button
              className="Footer__btn Footer__btn--left"
              onClick={onBackClick}
            >
              Back
            </button>
            <button className="Footer__btn Footer__btn--right"></button>
          </Route>
          <Route path="/highscore">
            <button
              className="Footer__btn Footer__btn--left"
              onClick={onBackClick}
            >
              Back
            </button>
            <button className="Footer__btn Footer__btn--right"></button>
          </Route>
          <Route path="/map">
            <button
              className="Footer__btn Footer__btn--left"
              onClick={onBackClick}
            >
              Back
            </button>
            <button
              className="Footer__btn Footer__btn--right"
              onClick={onEnterClick}
            >
              Enter
            </button>
          </Route>
          <Route path="/sudoku/summary"></Route>
          <Route path="/sudoku">
            <button
              className="Footer__btn Footer__btn--left"
              onClick={onBackClick}
            >
              Back
            </button>
            <button
              className="Footer__btn Footer__btn--right"
              onClick={onSubmitClick}
            >
              Submit
            </button>
          </Route>
          <Route path="/">
            <div className="Footer__topImage">
              <button className="Footer__btn StartBtn" onClick={onStartClick}>
                Start
              </button>
            </div>
          </Route>
        </Switch>
      </nav>
    </footer>
  );
}
