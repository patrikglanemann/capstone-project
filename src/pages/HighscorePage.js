import { useEffect, useState } from "react";
import "./HighscorePage.css";

export default function highscorePage() {
  const [highscoreList, setHighscoreList] = useState([]);
  useEffect(() => {
    let highscores = [];
    highscores = JSON.parse(localStorage.getItem("currentHighscores")) || [];
    setHighscoreList(highscores);
  }, []);

  function renderHighscores() {
    const newHighscoreList = highscoreList.map((highscore, index) => {
      return (
        <li key={index} className="highscore__item">
          {highscore}
        </li>
      );
    });
    return newHighscoreList;
  }

  return (
    <main className="HighscorePage Content">
      <ul className="highscoreList">{renderHighscores()}</ul>
    </main>
  );
}
