import "./MainPage.css";
import Logo from "../svg/logo.svg";

export default function MainPage() {
  return (
    <main className="MainPage Content">
      <img src={Logo} alt="Logo" className="Logo"></img>
    </main>
  );
}
