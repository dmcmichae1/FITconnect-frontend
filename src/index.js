import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Trainers from './screens/Trainers';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trainers">Trainers</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/trainers" component={Trainers} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));