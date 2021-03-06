import "./Header.css";
import { NavLink, Switch, Route } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../svg/profile-fill.svg";
import { ReactComponent as HighscoreIcon } from "../svg/chart-fill.svg";
import { ReactComponent as OptionsIcon } from "../svg/gear-fill.svg";

export default function Header({ sudokuDifficulty, score }) {
  return (
    <header className="Header">
      <Switch>
        <Route path="/profile">
          <div className="Header__topImage">
            <h1 className="Header__title">Profile</h1>
          </div>
        </Route>
        <Route path="/highscore">
          <div className="Header__topImage">
            <h1 className="Header__title">Highscore</h1>
          </div>
        </Route>
        <Route path="/map">
          <div className="Header__topImage">
            <h1 className="Header__title">Score: {score}</h1>
          </div>
        </Route>
        <Route path="/sudoku">
          <div className="Header__topImage">
            <h1 className="Header__title">Score: {score}</h1>
            <h2 className="Header__subTitle">Room: {sudokuDifficulty}</h2>
          </div>
        </Route>
        <Route path="/">
          <div className="Header__topImage">
            <h1 className="Header__title">Score: {score}</h1>
          </div>
          <nav className={"Header__navBar"}>
            <NavLink to="/profile">
              <ProfileIcon />
            </NavLink>
            <NavLink to="/highscore">
              <HighscoreIcon />
            </NavLink>
            <OptionsIcon />
          </nav>
        </Route>
      </Switch>
    </header>
  );
}
