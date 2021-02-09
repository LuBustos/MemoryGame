import "./Home.css";

const Home = (props:any) => {
    console.log(props)
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
        <button>Comenzar</button>
      </header>
    </div>
  );
};

export default Home;
