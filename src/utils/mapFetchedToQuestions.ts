import { nanoid } from "nanoid";
import Question from "../types/Question";
import QuestionFetched from "../types/QuestionFetched";

const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const mapFetchedToQuestions = (questionsFetched: QuestionFetched[]) => {
  const questions: Question[] = questionsFetched.map((question) => {
    return {
      id: nanoid(),
      question: question.question,
      answers: shuffleArray([
        question.correct_answer,
        ...question.incorrect_answers,
      ]),
      correctAnswer: question.correct_answer,
      selectedAnswer: null,
    };
  });
  return questions;
};

export default mapFetchedToQuestions;
