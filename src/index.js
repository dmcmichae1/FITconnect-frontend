import React from 'react';
import './App.js';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Trainer from './screens/Trainer';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/trainer" component={Trainer} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));