import usePostFetch from "../hooks/usePostFetch";

export default function ValidateBtn({ value, onClick, numbersArray, url }) {
  const response = usePostFetch(url, numbersArray);

  function handleSubmitClick() {
    onClick(response);
  }

  return (
    <button className="SubmitBtn" onClick={handleSubmitClick}>
      {value}
    </button>
  );
}
