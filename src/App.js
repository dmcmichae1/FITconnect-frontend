import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Trainer from './Pages/Trainer';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/trainer" component={Trainer} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
