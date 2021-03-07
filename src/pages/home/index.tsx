import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Home.css";

const Home = ({ history }: RouteComponentProps) => {
  const [difficulty, settDifficulty] = useState<string | null>(null);

  const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value: string = e.currentTarget.value;
    settDifficulty(value);
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <p className={"Home-text"}>The memory game</p>
        <hr className={"Home-hr "} />
        <div>
          <select className={"Button"} onChange={handleDifficulty}>
            <option>Easy</option>
            <option>Normal</option>
            <option>Hard</option>
          </select>
        </div>
        <div>
          <button
            className={"Button"}
            onClick={() => history.push("/Game", difficulty)}
          >
            Start
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
