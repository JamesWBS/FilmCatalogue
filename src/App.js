import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";
import Home from "./views/home";
import Showcase from "./views/showcase";
import Movie from "./views/movie";
import Search from "./components/search";

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
          <a href="#">
            {" "}
            <Link to="/search">Search</Link>
          </a>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            
            872
            2 Switch and route defines what happens when go on path */}
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
          <Route path="/search">
            <Search></Search>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
