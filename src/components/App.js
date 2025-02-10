import { useEffect, useReducer } from "react";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuizContext } from "./Context/QuizContext";

// const initialState = {
//   questions: [],
//   //'Loading','error','ready','active','finished'
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highScore: 0,
//   secondsRemaining: null,
// };

// const SECS_PER_QUESTION = 30;

// function reducer(state, action) {
//   switch (action.type) {
//     case "dataReceived":
//       return {
//         ...state,
//         questions: action.payload,
//         status: "ready",
//       };
//     case "dataFailed":
//       return {
//         ...state,
//         status: "error",
//       };
//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondsRemaining: state.questions.length * SECS_PER_QUESTION,
//       };
//     case "newAnswer":
//       const question = state.questions.at(state.index);
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };
//     case "nextQuestion":
//       return { ...state, index: state.index + 1, answer: null };
//     case "finished":
//       return {
//         ...state,
//         status: "finished",
//         highScore:
//           state.points > state.highScore ? state.points : state.highScore,
//       };
//     case "restart":
//       return { ...initialState, questions: state.questions, status: "ready" };
//     case "tick":
//       return {
//         ...state,
//         secondsRemaining: state.secondsRemaining - 1,
//         status: state.secondsRemaining === 0 ? "finished" : state.status,
//       };
//     default:
//       return new Error("An unknown error occured");
//   }
// }

export default function App() {
  // const [
  //   { questions, status, index, answer, points, highScore, secondsRemaining },
  //   dispatch,
  // ] = useReducer(reducer, initialState);
  const SECS_PER_QUESTION = 30;
  const { status } = useQuizContext();

  return (
    <main className="app">
      <Header />

      <Main className="main">{status === "loading" && <Loader />}</Main>
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <div>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </div>
        </>
      )}
      <div>{status === "finished" && <FinishedScreen />}</div>
    </main>
  );
}
