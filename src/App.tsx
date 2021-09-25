import React from "react";
import "./App.css";
import QuestionCards from "./components/QuestionCards";

function App() {
  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const startQuiz = async () => {};
  const nextQuestion = async () => {};
  return (
    <div className="container bg-green-100 mx-auto p-4">
      <div className="text-center">
        <h1 className=" text-6xl text-green-600">Quiz</h1>
        <button
          className="start text-green-900 text-lg px-4 py-1 border-2 border-green-700 rounded-lg hover:bg-green-200 "
          onClick={startQuiz}
        >
          Begin Quiz
        </button>
        <p className="text-4xl text-indigo-500">Score : </p>
        <p className=" text-6xl text-indigo-700">Loading :</p>
        <button
          className="next text-green-900 text-lg px-3 py-1/2 border-2 border-green-700 rounded-md hover:bg-green-200"
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
