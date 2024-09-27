type Question = {
  id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
};

export default Question;
