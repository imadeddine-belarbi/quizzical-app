import { useState } from "react";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";

const App = () => {
  const [isStart, setIsStart] = useState(false);

  return (
    <div className='container'>
      {!isStart ? (
        <HomePage startGame={() => setIsStart(true)} />
      ) : (
        <MainPage />
      )}
    </div>
  );
};

export default App;
