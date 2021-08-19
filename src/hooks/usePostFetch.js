import { useState, useEffect } from "react";

export default function usePostFetch(url, numbersArray) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const encodeBoard = (board) =>
      board.reduce(
        (result, row, i) =>
          result +
          `%5B${encodeURIComponent(row)}%5D${
            i === board.length - 1 ? "" : "%2C"
          }`,
        ""
      );

    const encodeParams = (params) =>
      Object.keys(params)
        .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
        .join("&");

    const data = {
      board: numbersArray,
    };

    fetch(url, {
      method: "POST",
      body: encodeParams(data),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => response.json())
      .then((response) => setResponse(response.status))
      .catch(console.warn);
  }, [numbersArray]);

  return response;
}
