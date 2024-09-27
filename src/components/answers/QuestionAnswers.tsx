import { decode } from "html-entities";
import Question from "../../types/Question";
import AnswerStatus from "./AnswerStatus";
import tickImg from "../../assets/images/tick.svg";
import crossImg from "../../assets/images/cross.svg";

type AnswerQuestionProps = {
  question: Question;
};

const QuestionAnswers = ({ question }: AnswerQuestionProps) => {
  const isCorrect = question.selectedAnswer === question.correctAnswer;

  const answersList = question.answers.map((answer, index) => {
    return (
      <AnswerStatus
        key={`${question.id}-${index}`}
        question={question}
        answer={answer}
      />
    );
  });

  return (
    <div className='question-container answer'>
      <div>
        <h3 className='question-title'>{decode(question.question)}</h3>
        <div className='answers-container'>{answersList}</div>
      </div>
      {isCorrect ? (
        <img src={tickImg} width={35} alt='Tick, correct answer' />
      ) : (
        <img src={crossImg} width={35} alt='Cross, incorrect answer' />
      )}
    </div>
  );
};

export default QuestionAnswers;
