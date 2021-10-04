import React from "react";
import { AnswerObject } from "../App";
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCards: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div className="text-center">
      <p className="number text-white font-bold">
        Question : {questionNr} / {totalQuestions}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: question }}
        className="text-gray-300 text-2xl my-4"
      />
      <div className="flex flex-col justify-center items-center">
        {answers.map((answer) => (
          <button
            key={answer}
            disabled={userAnswer ? true : false}
            
            value={answer}
            onClick={callback}
            className="px-3 py-1 m-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCards;
