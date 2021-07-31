import React from 'react';


const Signup = () => (


  <div className="signup">
  <h2>Signup bro!</h2>
  <form action="/action_page.php">
  <div className="form-group">
      <label for="firstName">First Name:</label>
      <input type="firstName" className="form-control" id="firstName" placeholder="Enter first name" name="firstName"></input>
    </div>
    <div className="form-group">
      <label for="lastName">Last Name:</label>
      <input type="lastName" className="form-control" id="lastName" placeholder="Enter last name" name="lastName"></input>
    </div>
    <div className="form-group">
      <label for="username">Username:</label>
      <input type="username" className="form-control" id="username" placeholder="Enter username" name="username"></input>
    </div>
    <div className="form-group">
      <label for="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
    </div>
    <button type="submit" class="btn btn-default">Signup</button>
  </form>
</div>
    
   
  

  
);

export default Signup;
