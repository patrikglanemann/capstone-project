import usePostFetch from "../hooks/usePostFetch";

export default function ValidateBtn({ value, onClick, validateData, url }) {
  const response = usePostFetch(url, validateData);

  function handleSubmitClick() {
    onClick(response);
  }

  return (
    <button className="SubmitBtn" onClick={handleSubmitClick}>
      {value}
    </button>
  );
}
