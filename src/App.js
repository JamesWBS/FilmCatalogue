import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";
import Home from "./components/home";
import Showcase from "./components/showcase";
import Movie from "./components/movie";
export default () => {
  return (
    <Router>
      <div>
        <div class="sidenav">
          <a href="#">
            <Link to="/">Home</Link>
          </a>
          <a href="#">
            {" "}
            <Link to="/showcase">Showcase</Link>
          </a>
          <a href="#">
            {" "}
            <Link to="/movies">Movies</Link>
          </a>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. Switch and route defines what happens when go on path */}
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/showcase">
            <Showcase></Showcase>
          </Route>
          <Route path="/movies">
            <Movie></Movie>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
