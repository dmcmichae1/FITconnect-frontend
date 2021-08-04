import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import './login.css'

const SignUp = ({ history }) => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');



  const SignUp = (e) => {
    e.preventDefault();

    if (firstName !== '' && password !== '') {
      const req = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName

      };

      axios.post('http://localhost:3000/trainers', req).then(result => {
        const token = result.data.jwt;
        localStorage.setItem('myJWT', token);
        history.push('/trainer');

        console.log(result.data);

      })
    }
  };



  return (<div className="SignUp">


    <h2>Signup bro!</h2>
    <form onSubmit={SignUp} action="/action_page.php">
      <div className="form-group">
        <label for="firstName">First Name:</label>
        <input type="firstName" className="form-control" id="firstName" placeholder="Enter first name" name="firstName" onChange={e => setfirstName(e.target.value)} ></input>
      </div>
      <div className="form-group">
        <label for="lastName">Last Name:</label>
        <input type="lastName" className="form-control" id="lastName" placeholder="Enter last name" name="lastName" onChange={e => setlastName(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label for="username">Username:</label>
        <input type="username" className="form-control" id="username" placeholder="Enter username" name="username" onChange={e => setusername(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label for="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={e => setpassword(e.target.value)}></input>
      </div>
      <button type="submit" class="btn btn-default">Signup</button>
    </form>

  </div>);





}
export default withRouter(SignUp);
