import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { TodoOne } from './components/TodoOne/TodoOne';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/todo-one" component={TodoOne} />
        </Switch>
      </Router>
    </>
  );
}
