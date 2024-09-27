import { useContext } from "react";
import QuestionType from "../../types/Question";
import { decode } from "html-entities";
import { QuestionsContext } from "../../providers/QuestionsProvider";

type AnswerProps = {
  question: QuestionType;
  answer: string;
};

const AnswerOption = ({ question, answer }: AnswerProps) => {
  const { setQuestions } = useContext(QuestionsContext);
  const answerClasses =
    question.selectedAnswer === answer ? "answer-btn selected" : "answer-btn";

  const handleClick = () => {
    setQuestions((prev) => {
      return prev.map((current) =>
        current.id === question.id
          ? { ...current, selectedAnswer: answer }
          : current
      );
    });
  };

  return (
    <button className={answerClasses} onClick={handleClick}>
      {decode(answer)}
    </button>
  );
};

export default AnswerOption;
