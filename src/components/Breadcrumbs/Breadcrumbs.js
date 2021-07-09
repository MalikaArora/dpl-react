import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";

const ShowBreadcrumbs = () => {
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Item1" exact component={() => <Item1 />} />
          <Route path="/Item1/Item2" exact component={() => <Item2 />} />
          <Route path="/Item1/Item2/Item3" exact component={() => <Item3 />} />
        </Switch>
      </Router>
    </div>
  );
};
export default ShowBreadcrumbs;
