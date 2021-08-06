import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Trainers from './Pages/Trainer';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Articles from './Pages/Articles';
import NewArticle from './Pages/NewArticle';
import ArticlesDetails from './Pages/ArticlesDetails';
import ArticleEdit from './Pages/ArticleEdit';
import PrivateRoute from './Pages/PrivateRoute';
import myImage from '../src/image/fitconnect.png';




function App() {
  return (
    <div className='App'>
      <Router>
        <div className="topnav" id="myTopnav">
          <nav>

            <ul>
              <img src={myImage} alt="" />
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
                <Link to="/trainers">Trainers</Link>
              </li>
            </ul>
          </nav>

        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login" component={Login}>
            <Login />
          </Route>

          <Route exact path="/signup" component={SignUp}>
            <SignUp />
          </Route>

          <Route exact path="/trainers" component={Trainers}>
            <Trainers />
          </Route>

          <PrivateRoute exact path="/new" component={NewArticle}>
          </PrivateRoute>

          <Route exact path="/articles" component={Articles}>
            <Articles />
          </Route>

          <Route exact path="/:articleId" component={ArticlesDetails}>
            <ArticlesDetails />
          </Route>

          <PrivateRoute exact path="/:edit/articleId" component={ArticleEdit}>
          </PrivateRoute>

        </Switch>

      </Router>

    </div >

  );
}

export default App;
