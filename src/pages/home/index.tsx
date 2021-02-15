import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import "./Home.css";

const Home = ({history}:RouteComponentProps ) => {
  const [difficulty,settDifficulty] = useState<string | null>(null);

  const handleDifficulty = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const value : string = e.currentTarget.value;
    settDifficulty(value)
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <p className={"Home-text"}>
          The memory game
        </p>
          <hr className={"Home-hr "} />
        <select onChange={handleDifficulty}>
          <option>Facil</option>
          <option>Normal</option>
          <option>Dificil</option>
        </select>
        <button onClick={() => history.push("/Game",difficulty)}>Comenzar</button>
      </header>
    </div>
  );
};

export default Home;
