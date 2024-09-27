import { useState } from "react";
import AnswersPage from "./AnswersPage";
import QuestionsPage from "./QuestionsPage";
import QuestionsProvider from "../providers/QuestionsProvider";

type MainPage = "questions" | "answers";

const MainPage = () => {
  const [mainPage, setMainPage] = useState<MainPage>("questions");

  return (
    <QuestionsProvider>
      {mainPage === "questions" ? (
        <QuestionsPage showAnswers={() => setMainPage("answers")} />
      ) : (
        <AnswersPage restartGame={() => setMainPage("questions")} />
      )}
    </QuestionsProvider>
  );
};

export default MainPage;
