import "./Header.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../svg/profile-fill.svg";
import { ReactComponent as HighscoreIcon } from "../svg/chart-fill.svg";
import { ReactComponent as OptionsIcon } from "../svg/gear-fill.svg";
import { useState } from "react";

export default function Header({ title, subTitle, type }) {
  const [isActive, setIsActive] = useState(false);

  function handleOptionClick() {
    setIsActive(!isActive);
  }

  return (
    <header>
      <div className="Header__topImage">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      <nav
        className={`Header__NavBar ${
          type === "1" ? "Header__NavBar--active" : ""
        }`}
      >
        <NavLink to="/profile">
          <ProfileIcon />
        </NavLink>
        <NavLink to="/highscores">
          <HighscoreIcon />
        </NavLink>
        <OptionsIcon onClick={handleOptionClick} />
        <div className={`OptionsNav ${isActive ? "OptionsNav--active" : ""}`}>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </header>
  );
}
