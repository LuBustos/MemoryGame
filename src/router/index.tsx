import { Route } from "react-router-dom";
import {Home,Game} from '../pages/index'

const Router = () => {
  return (
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/Game" exact component={Game}/>
    </div>
  );
};

export default Router;
