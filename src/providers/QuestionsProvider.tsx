import { createContext, useState } from "react";
import Question from "../types/Question";

type QuestionsContextType = {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
};

export const QuestionsContext = createContext<QuestionsContextType>(null!);

const QuestionsProvider = ({ children }: { children: React.ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
