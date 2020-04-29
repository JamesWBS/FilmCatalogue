import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages,  handled by the router: a home page,
// a spotlight page and a movies search page. all of which are rendered
// dynamically in the browser (not server rendered).As one clicks around 
// on the different <Link>s, the <Router> renders the matching <Route>
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/spotlight">Spotlight</Link>
            </li>
            <li>
              <Link to="/search">Movie Search</Link>
            </li>
          </ul>
        </nav>
<hr />
        {/*  A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
            
            */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/spotlight">
            <Spotlight />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// You can think of these components as "pages"
// in your app.

function Home() {
  return (
  <div>
    <h2>Home</h2>
  </div>
  );
}

function Spotlight() {
  return <h2>Spotlight</h2>;
}

function Search() {
  return <h2>Movie Search</h2>;
}


