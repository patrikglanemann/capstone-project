import "./MapPage.css";

export default function MapPage() {
  return (
    <main className="MapPage Content">
      <button className="MapPage__arrowBtn MapPage__arrowBtn--up"></button>
      <div className="MapPage__middle">
        <button className="MapPage__arrowBtn MapPage__arrowBtn--left"></button>
        <div className="Room">
          <span>
            <h3>Difficulty:</h3>
            <h3>easy</h3>
          </span>
          <h3>Points + 5</h3>
        </div>
        <button className="MapPage__arrowBtn MapPage__arrowBtn--right"></button>
      </div>
      <button className="MapPage__arrowBtn MapPage__arrowBtn--down"></button>
    </main>
  );
}
