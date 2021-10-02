import React from "react";

type Props = {
  question: string;
  answers: [string];
  callback: any;
  userAnswer: any;
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
      <p className="number">
        Question : {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}>
        <div>
          {answers.map((answer) => (
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          ))}
        </div>
      </p>
    </div>
  );
};

export default QuestionCards;
