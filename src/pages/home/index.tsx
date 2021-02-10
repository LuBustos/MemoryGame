import { RouteComponentProps } from 'react-router-dom';
import "./Home.css";

const Home = ({history}:RouteComponentProps ) => {
    console.log(history)
  return (
    <div className="Home">
      <header className="Home-header">
        <p className={"Home-text"}>
          The memory game
        </p>
          <hr className={"Home-hr "} />
        <select>
          <option>Facil</option>
          <option>Normal</option>
          <option>Dificil</option>
        </select>
        <button onClick={() => history.push("/Game")}>Comenzar</button>
      </header>
    </div>
  );
};

export default Home;
