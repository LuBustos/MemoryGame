import Title from "../../components/Title";
import { RouteComponentProps } from "react-router-dom";
import './End.css'
const End = ({history,location}:RouteComponentProps) => {
  console.log("hola",location.state);
  return (
    <div className={"End"}>
      <header className={"End-header"}>
        <Title title={"Congratulations!"} />
        <div>
            <p>Results</p>
            <p>Attempts: {location.state}</p>
        </div>
        <div>
          <button className="Button" onClick={() => history.push("/")}>Try again</button>
        </div>
      </header>
    </div>
  );
};

export default End;
