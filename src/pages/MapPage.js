import "./MapPage.css";
import { useEffect, useRef } from "react";
import RoomSelectBtn from "../components/RoomSelectBtn";

export default function MapPage() {
  const roomsDifficulty = useRef(Array(4));

  useEffect(() => {
    roomsDifficulty.current = [...new Array(4)].map(() =>
      Math.round(Math.random() * 2)
    );
  }, []);

  function handleRoomSelectClick(room) {
    console.log(room);
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
            <h3>easy</h3>
          </span>
          <h3>Points + 5</h3>
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
