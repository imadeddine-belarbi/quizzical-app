import { useContext } from "react";
import QuestionAnswers from "./answers/QuestionAnswers";
import { QuestionsContext } from "../providers/QuestionsProvider";

type AnswersPageProps = {
  restartGame: () => void;
};

const AnswersPage = ({ restartGame }: AnswersPageProps) => {
  const { questions } = useContext(QuestionsContext);
  const score = questions.reduce(
    (count, question) =>
      question.selectedAnswer === question.correctAnswer ? ++count : count,
    0
  );

  const questionsList = questions?.map((question) => (
    <QuestionAnswers key={question.id} question={question} />
  ));

  return (
    <div className='main-content'>
      <div>
        <h1>Questions</h1>
        {questionsList}
      </div>
      <div className='score-panel'>
        <p className='score'>You scored {score}/5 correct answer</p>
        <button className='btn-primary' onClick={restartGame}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default AnswersPage;
