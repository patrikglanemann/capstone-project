export default function RoomSelectBtn({ btnID, onClick, btnClass }) {
  function handleClick() {
    onClick(btnID);
  }

  return <button className={btnClass} onClick={handleClick}></button>;
}
