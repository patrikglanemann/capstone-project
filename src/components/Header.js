import "./Header.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../svg/profile-fill.svg";
import { ReactComponent as HighscoreIcon } from "../svg/chart-fill.svg";
import { ReactComponent as OptionsIcon } from "../svg/gear-fill.svg";

export default function Header({ title, subTitle, type }) {
  return (
    <header className="Header">
      <div className="Header__topImage">
        <h1 className="Header__title">{title}</h1>
        <h2 className="Header__subTitle">{subTitle}</h2>
      </div>
      <nav
        className={`Header__NavBar ${type === "1" && "Header__NavBar--active"}`}
      >
        <NavLink to="/profile">
          <ProfileIcon />
        </NavLink>
        <NavLink to="/highscores">
          <HighscoreIcon />
        </NavLink>
        <OptionsIcon />
      </nav>
    </header>
  );
}
