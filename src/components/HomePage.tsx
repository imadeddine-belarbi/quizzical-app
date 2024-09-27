type HomePageProps = {
  startGame: () => void;
};

const HomePage = ({ startGame }: HomePageProps) => {
  return (
    <div className='home-content'>
      <h1>Quizzical app</h1>
      <p className='sub-heading'>
        Answer the questions and test your knowledge!
      </p>
      <button className='btn-primary btn-lg' onClick={startGame}>
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
