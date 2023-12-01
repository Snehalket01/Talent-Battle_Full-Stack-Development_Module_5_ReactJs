// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { ImageProvider } from './ImageContext';
import ImageList from './ImageList';
import ImageDetail from './ImageDetail';
import SearchPage from './SearchPage';

const App = () => {
  return (
    <ImageProvider>
      <Router>
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/mountain" activeClassName="active">
            Mountain
          </NavLink>
          <NavLink to="/beaches" activeClassName="active">
            Beaches
          </NavLink>
          <NavLink to="/birds" activeClassName="active">
            Birds
          </NavLink>
          <NavLink to="/food" activeClassName="active">
            Food
          </NavLink>
          <NavLink to="/search" activeClassName="active">
            Search
          </NavLink>
        </nav>

        <Switch>
          <Route path="/" exact component={ImageList} />
          <Route path="/mountain" component={ImageList} />
          <Route path="/beaches" component={ImageList} />
          <Route path="/birds" component={ImageList} />
          <Route path="/food" component={ImageList} />
          <Route path="/search" component={SearchPage} />
          <Route path="/detail/:id" component={ImageDetail} />
        </Switch>
      </Router>
    </ImageProvider>
  );
};

export default App;
