import React from "react";
import Navbar from './components/Navbar.jsx';
import { Provider } from 'react-redux';
import { store } from './configure-store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Navbar/>
        </div>
          <Switch>
            <Route path="/three">
                <Three />
            </Route>
            <Route path="/two">
                <Two />
            </Route>
            <Route path="/">
                <One />
            </Route>
          </Switch>
    </Provider>
      </Router>
  );
}

function One() {
  return <h2>One</h2>;
}

function Two() {
  return <h2>Two</h2>;
}

function Three() {
  return <h2>Three</h2>;
}