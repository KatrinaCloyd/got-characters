import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListContainer from '../../containers/ListContainer';
import DetailContainer from '../../containers/DetailContainer';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path='/'
          exact render={(routerProps) => <ListContainer {...routerProps} />}
        />
        <Route
          path='/:id'
          exact render={(routerProps) => <DetailContainer {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
