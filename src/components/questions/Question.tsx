import { decode } from "html-entities";
import QuestionType from "../../types/Question";
import AnswerOption from "./AnswerOption";

type QuestionProps = {
  question: QuestionType;
};

const Question = ({ question }: QuestionProps) => {
  const answersList = question.answers.map((answer, index) => (
    <AnswerOption
      key={`${question.id}-${index}`}
      question={question}
      answer={answer}
    />
  ));

  return (
    <div className='question-container'>
      <h3 className='question-title'>{decode(question.question)}</h3>
      <div className='answers-container'>{answersList}</div>
    </div>
  );
};

export default Question;
