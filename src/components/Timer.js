import { useEffect } from "react";
import { useQuizContext } from "./Context/QuizContext";

export default function Timer() {
  const { dispatch, secondsRemaining } = useQuizContext();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const timerId = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(timerId);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
