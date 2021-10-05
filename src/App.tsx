import React, { useState } from "react";
import QuestionCards from "./components/QuestionCards";
import { fetchQuizQuestions } from "./API";
// Types
import { Difficulty, QuestionState } from "./API";

// Total questions
const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0); // the current question Number user is on
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // user answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = async () => {
    // move to next question if not last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <div className=" mx-auto p-4 h-screen flex flex-col justify-center items-center">
      <div className="text-center ">
        <h1 className=" text-6xl text-accent_2 mt-2">Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button
            className="start text-accent_2 text-lg px-4 py-1 mx-2 rounded-lg btn bg-accent_1 my-8"
            onClick={startTrivia}
          >
            Begin Quiz
          </button>
        ) : null}
        {!gameOver ? (
          <p className="text-4xl text-accent_2 my-4">Score : {score} </p>
        ) : null}

        {loading && <p className=" text-6xl text-accent_2 my-8">Loading :</p>}
      </div>

      {!loading && !gameOver && (
        <QuestionCards
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button
          className="next text-accent_2 text-lg my-2 px-3 mx-2 py-1/2 bg-accent_1 rounded-md btn"
          onClick={nextQuestion}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default App;
