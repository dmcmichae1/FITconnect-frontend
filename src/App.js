import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Trainer from './Pages/Trainer';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Articles from './Pages/Articles';
import NewArticle from './Pages/NewArticle';




function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/trainer">Trainer</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/new">
              <NewArticle />
            </Route>

            <Route path="/">
              <Articles />
            </Route>
          </Switch>
        
        
        <Route path="/" component={Home} />
        <Route path="/trainer" component={Trainer} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />

        </div>
      </Router>

    </div>

  );
}

export default App;
