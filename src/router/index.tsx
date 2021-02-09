import { Route } from "react-router-dom";
import {Home} from '../pages/index'

const Router = () => {
  return (
    <div>
      <Route path="/" exact component={Home}/>
    </div>
  );
};

export default Router;
