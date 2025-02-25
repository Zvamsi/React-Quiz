function Progress({ index, numQuestion, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index}></progress>

      <p>
        Question <strong>{index + Number(answer !== null)}</strong>/
        {numQuestion}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}
export default Progress;
