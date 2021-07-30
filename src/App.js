import React from 'react';
import Home from './Pages/Home';
import Trainer from './Pages/Trainer';
import Signup from './Pages/Signup';
 import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';


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
