import "./MainPage.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../svg/profile-fill.svg";
import { ReactComponent as HighscoreIcon } from "../svg/chart-fill.svg";
import { ReactComponent as OptionsIcon } from "../svg/gear-fill.svg";

export default function MainPage() {
  return (
    <div className="MainPage">
      <header>
        <div className="Header__topImage">
          <h1>Main</h1>
        </div>
        <nav className="Header__NavBar">
          <ProfileIcon />
          <NavLink to="/highscores">
            <HighscoreIcon />
          </NavLink>
          <OptionsIcon />
        </nav>
      </header>
      <main>Main Page</main>
      <footer>
        <NavLink to="/sudoku">
          <button className="Footer__Btn">Start</button>
        </NavLink>
      </footer>
    </div>
  );
}
