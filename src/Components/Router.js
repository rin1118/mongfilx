import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Detail from "../Routes/Detail";
import Header from "./Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/tv/popular" render={() => <h1>popular</h1>} />
      <Route path="/search" component={Search} />
      <Route path="/detail" component={Detail} />
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
