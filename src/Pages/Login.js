import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';

const Login = ({history}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const signIn = (e) => {
    e.preventDefault();

    if (username !== '' && password !== '') {
      const req = {
        username: username,
        password: password
      };

      axios.post('http://localhost:3000/trainers/login', req).then(result => {
        const token = result.data.jwt;
        localStorage.setItem('myJWT', token);
        history.push('/articles');

        console.log(result.data);

      })
    }
  };

  return (<div className="login">
    <h1>Sign In</h1>
    <form onSubmit={signIn} action="/action_page.php">
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={e => setUsername(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label for="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={e => setPassword(e.target.value)}></input>
      </div>
      <button type="submit" class="btn btn-default">Login</button>
    </form>
  </div>);

}

export default withRouter(Login);
