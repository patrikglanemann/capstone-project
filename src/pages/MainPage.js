import "./MainPage.css";
import Header from "../components/Header.js";
import { NavLink } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="MainPage App__gridLayout">
      <Header title="Main" type="1" />

      <main>Main Page</main>
      <footer className="Footer">
        <NavLink to="/sudoku">
          <button className="Footer__startbtn">Start</button>
        </NavLink>
      </footer>
    </div>
  );
}
