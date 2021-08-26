import "./HighscorePage.css";

export default function highscorePage() {
  const highscores = [10, 50, 25, 35, 0, 85, 40];

  function renderHighscores() {
    const highscoreList = highscores.map((highscore, index) => {
      return (
        <li key={index} className="highscore__item">
          {highscore}
        </li>
      );
    });
    return highscoreList;
  }

  return (
    <main className="HighscorePage Content">
      <ul className="highscoreList">{renderHighscores()}</ul>
    </main>
  );
}
