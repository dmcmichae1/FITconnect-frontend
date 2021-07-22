import React from 'react';



const Header = ({ title }) => (
    <div>
      <a class="active" href="#">Home</a>
      <a href="/trainers">Trainers</a>
      <a href="/users">Users</a>
      <a href="/admin">Admin</a>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      <h1>{title}</h1>
    </div>

  );

  export default Header;