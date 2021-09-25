import React from "react";
import "./App.css";
import QuestionCards from "./components/QuestionCards";

function App() {
  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const startQuiz = async () => {};
  const nextQuestion = async () => {};
  return (
    <div className=" mx-auto p-4 h-screen flex flex-col justify-center items-center">
      <div className="text-center ">
        <h1 className=" text-6xl text-accent_2 mt-2">Quiz</h1>
        <button
          className="start text-accent_2 text-lg px-4 py-1 rounded-lg btn bg-accent_1 my-8"
          onClick={startQuiz}
        >
          Begin Quiz
        </button>
        <p className="text-4xl text-accent_2 my-4">Score : </p>
        <p className=" text-6xl text-accent_2 my-8">Loading :</p>
        <button
          className="next text-accent_2 text-lg px-3 py-1/2 bg-accent_1 rounded-md btn"
          onClick={nextQuestion}
        >
          Next
        </button>
      </div>
      {/* <QuestionCards /> */}
    </div>
  );
}

export default App;
