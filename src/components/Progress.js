import { useQuizContext } from "./Context/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPoints, answer } = useQuizContext();
  console.log(numQuestions);
  return (
    <header className="progress">
      <progress max={numQuestions} value={index}></progress>

      <p>
        Question <strong>{index + Number(answer !== null)}</strong>/
        {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
export default Progress;
