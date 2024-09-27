import { useContext, useEffect } from "react";
import useFetchQuestions from "../hooks/useFetchQuestions";
import Question from "./questions/Question";
import { QuestionsContext } from "../providers/QuestionsProvider";

type QuestionsPageProps = {
  showAnswers: () => void;
};

const QuestionsPage = ({ showAnswers }: QuestionsPageProps) => {
  const {
    questions: data,
    loading,
    error,
  } = useFetchQuestions("https://opentdb.com/api.php?amount=5");
  const { setQuestions } = useContext(QuestionsContext);

  useEffect(() => {
    setQuestions(data);
  }, [data, setQuestions]);

  const { questions } = useContext(QuestionsContext);
  const questionsList = questions.map((question) => (
    <Question key={question.id} question={question} />
  ));

  const canCheckAnswers = questions?.every(
    ({ selectedAnswer }) => selectedAnswer
  );

  if (loading)
    return (
      <div className='main-content'>
        <span className='loader'></span>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='main-content'>
      <div>
        <h1>Questions</h1>
        {questionsList}
      </div>
      <button
        className='btn-primary'
        disabled={!canCheckAnswers}
        onClick={showAnswers}>
        Check answers
      </button>
    </div>
  );
};

export default QuestionsPage;
