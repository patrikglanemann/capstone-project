import "./MapPage.css";
import { useEffect, useRef, useState } from "react";
import RoomSelectBtn from "../components/RoomSelectBtn";

export default function MapPage({ onRoomClick }) {
  const roomsDifficulty = useRef(Array(4));
  const [difficulty, setDifficulty] = useState("???");
  const [points, setPoints] = useState("");

  useEffect(() => {
    const currentDifficulty = JSON.parse(
      localStorage.getItem("currentDifficulty")
    );
    if (currentDifficulty) {
      setDifficulty(currentDifficulty);
    }
    roomsDifficulty.current = [...new Array(4)].map(() => {
      const newDifficulty = Math.round(Math.random() * 2);
      if (newDifficulty === 0) {
        return "easy";
      } else if (newDifficulty === 1) {
        return "medium";
      } else if (newDifficulty === 2) {
        return "hard";
      }
    });
  }, []);

  function handleRoomSelectClick(room) {
    const currentSudoku = JSON.parse(localStorage.getItem("currentSudoku"));
    if (!currentSudoku) {
      setDifficulty(roomsDifficulty.current[room]);
      if (roomsDifficulty.current[room] === "easy") {
        setPoints("Points: 5");
      } else if (roomsDifficulty.current[room] === "medium") {
        setPoints("Points: 10");
      } else if (roomsDifficulty.current[room] === "hard") {
        setPoints("Points: 20");
      }
      try {
        localStorage.setItem(
          "currentDifficulty",
          JSON.stringify(roomsDifficulty.current[room])
        );
      } catch (error) {
        console.warn(error);
        alert("There was an error while saving the current difficulty");
      }

      onRoomClick(roomsDifficulty.current[room]);
    } else {
      alert("Game in progress, please enter the room to continue.");
    }
  }

  return (
    <main className="MapPage Content">
      <RoomSelectBtn
        btnID={0}
        btnClass="MapPage__arrowBtn MapPage__arrowBtn--up"
        onClick={handleRoomSelectClick}
      />
      <div className="MapPage__middle">
        <RoomSelectBtn
          btnID={3}
          btnClass="MapPage__arrowBtn MapPage__arrowBtn--left"
          onClick={handleRoomSelectClick}
        />
        <div className="Room">
          <span>
            <h3>Difficulty:</h3>
            <h3>{difficulty}</h3>
          </span>
          <h3>{points}</h3>
        </div>
        <RoomSelectBtn
          btnID={1}
          btnClass="MapPage__arrowBtn MapPage__arrowBtn--right"
          onClick={handleRoomSelectClick}
        />
      </div>
      <RoomSelectBtn
        btnID={2}
        btnClass="MapPage__arrowBtn MapPage__arrowBtn--down"
        onClick={handleRoomSelectClick}
      />
    </main>
  );
}
