import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useState } from 'react';


   const SignUp = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
  
  
  
    const signUp = (e) => {
      e.preventDefault();
  
      if (username !== '' && password !== '') {
        const req = {
          firstName: firstName,
          lastName: lastName,
          userName: username,
          password: password
        };
  
        axios.post('http://localhost:3000/trainers/signup', req).then(result => {
          const token = result.data.jwt;
          localStorage.setItem('myJWT', token);
          history.push('/trainers');
  
          console.log(result.data);
  
        })
       }
    };
  
    return (<div className="login">
    <h1>Sign Up Bro!</h1>
    <form onSubmit={signUp} action="/action_page.php">
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={e => setUsername(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label for="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={e => setPassword(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" className="form-control" id="firstName" placeholder="Enter firstName" name="firstName" onChange={e => setFirstname(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label for="lastName">Last Name:</label>
        <input type="lastName" className="form-control" id="lastName" placeholder="Enter lastName" name="lastName" onChange={e => setLastname(e.target.value)}></input>
      </div>
      <button type="submit" class="btn btn-default">Create</button>
    </form>
  </div>);

}

 

export default withRouter(SignUp);
