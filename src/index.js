import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './screens/Home';
import Admin from './screens/Admin';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Trainers from './screens/Trainers';
import Users from './screens/Users';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/admin':
      return <Admin />;
      case '/login':
      return <Login />;
    case '/signup':
      return <Signup />;
      case '/trainers':
      return <Trainers />;
      case '/users':
      return <Users />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
