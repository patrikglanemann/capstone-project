import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer({ path01, text01, path02, text02 }) {
  return (
    <footer>
      <nav className="Footer_NavBar">
        <NavLink to={path01}>
          <button className="Footer__Btn">{text01}</button>
        </NavLink>
        <NavLink to={path02}>
          <button className="Footer__Btn">{text02}</button>
        </NavLink>
      </nav>
    </footer>
  );
}
