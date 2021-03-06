import "./SummaryPage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import usePostFetch from "../hooks/usePostFetch.js";

export default function SummaryPage({ onDoneClick }) {
  const [resultMessage, setResultMessage] = useState("");
  const [sudokuDifficulty, setSudokuDifficulty] = useState("");
  const [points, setPoints] = useState("");
  const [score, setScore] = useState("");
  const currentSudoku = JSON.parse(localStorage.getItem("currentSudoku"));
  const url = "https://sugoku.herokuapp.com/validate";
  const response = usePostFetch(url, currentSudoku);

  useEffect(() => {
    if (response === "unsolved" || response === "broken") {
      setResultMessage("Defeat");
    } else if (response === "solved") {
      setResultMessage("Victory");
    }
    const currentDifficulty = JSON.parse(
      localStorage.getItem("currentDifficulty")
    );
    setSudokuDifficulty(currentDifficulty);

    let currentPoints = 0;
    if (response === "solved") {
      if (currentDifficulty === "easy") {
        currentPoints = 5;
      } else if (currentDifficulty === "medium") {
        currentPoints = 10;
      } else if (currentDifficulty === "hard") {
        currentPoints = 20;
      }
    } else {
      currentPoints = 0;
    }
    setPoints(currentPoints);
    let currentScore = JSON.parse(localStorage.getItem("currentScore"));
    if (!currentScore) {
      currentScore = 0;
    }
    try {
      localStorage.setItem(
        "currentScore",
        JSON.stringify(currentScore + currentPoints)
      );
    } catch (error) {
      console.warn(error);
      alert("There was an error while saving the current score");
    }

    setScore(currentScore + currentPoints);
  }, [response]);

  function handleDoneClick() {
    try {
      if (response !== "solved") {
        const newHighscore = score;
        let highscores = [];
        highscores =
          JSON.parse(localStorage.getItem("currentHighscores")) || [];
        highscores.push(newHighscore);
        localStorage.setItem("currentHighscores", JSON.stringify(highscores));
      }
      localStorage.setItem("currentInitialSudoku", JSON.stringify(null));
      localStorage.setItem("currentSudoku", JSON.stringify(null));
      localStorage.setItem("currentDifficulty", JSON.stringify(null));
      if (resultMessage === "Defeat") {
        localStorage.setItem("currentScore", JSON.stringify(0));
      }
    } catch (error) {
      console.warn(error);
      alert("There was an error while resetting game session data");
    }
    onDoneClick();
  }

  return (
    <main className="SummaryPage Content">
      <div
        className={`Summary__banner ${
          resultMessage === "Victory"
            ? "Summary__banner--victory"
            : "Summary__banner--defeat"
        }`}
      >
        <h2 className="Summary__title">{resultMessage}</h2>
      </div>
      <div
        className={`Summary__contentBox ${
          resultMessage === "Victory"
            ? "Summary__contentBox--victory"
            : "Summary__contentBox--defeat"
        }`}
      >
        <span>
          <h3>Difficulty:</h3>
          <h3>{sudokuDifficulty}</h3>
        </span>
        <h3>{resultMessage === "Victory" ? `Points: +${points}` : ""}</h3>
        <h3 className="Summary__contentBox__score">
          {resultMessage === "Victory"
            ? `Score: ${score}`
            : `Highscore: ${score}`}{" "}
        </h3>
        <Link to="/map">
          <button className="Summary__doneBtn" onClick={handleDoneClick}>
            Done
          </button>
        </Link>
      </div>
    </main>
  );
}
