import { decode } from "html-entities";
import Question from "../../types/Question";

type AnswerProps = {
  question: Question;
  answer: string;
};

const AnswerStatus = ({ question, answer }: AnswerProps) => {
  const answerClasses =
    question.selectedAnswer !== answer
      ? question.correctAnswer === answer
        ? "answer-btn correct"
        : "answer-btn not-concerned"
      : question.selectedAnswer === question.correctAnswer
      ? "answer-btn correct"
      : "answer-btn false";

  return (
    <button className={answerClasses} disabled>
      {decode(answer)}
    </button>
  );
};

export default AnswerStatus;
