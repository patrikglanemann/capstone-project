import "./SummaryPage.css";
import { Link } from "react-router-dom";

export default function SummaryPage() {
  return (
    <main className="SummaryPage Content">
      <div className="Summary__banner">
        <h2 className="Summary__title">Victory</h2>
      </div>
      <div className="Summary__contentBox">
        <span>
          <h3>Difficulty:</h3>
          <h3>easy</h3>
        </span>
        <h3>Points + 5</h3>
        <h3>Score: 85</h3>
        <Link to="/map">
          <button className="Summary__doneBtn">Done</button>
        </Link>
      </div>
    </main>
  );
}
