import React from 'react';

const Login = () => (

  <div className="login">
    <h2>The Journey Starts Here</h2>
    <form action="/action_page.php">
      <div className="form-group">
        <label for="email">Username:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter username" name="email"></input>
      </div>
      <div className="form-group">
        <label for="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
      </div>
      <button type="submit" class="btn btn-default">Login</button>
    </form>
  </div>

  
    
  
);

export default Login;
