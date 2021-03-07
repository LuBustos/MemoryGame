import { Route } from "react-router-dom";
import {Home,Game,End} from '../pages/index'

const Router = () => {
  return (
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/Game" exact component={Game}/>
      <Route path="/End" exact component={End}/>
    </div>
  );
};

export default Router;
