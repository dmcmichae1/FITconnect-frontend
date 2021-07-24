import React from 'react';
import './Header.css';



const Header = ({ title }) => (
    <div>
      <a id="1" class="active" href="#">Home</a>
      <a  id="2" href="/trainers">Trainers</a>
      <a id="3" href="/users">Users</a>
      <a id="4" href="/admin">Admin</a>
      <a id="5" href="/login">Login</a>
      <a id="6" href="/signup">Signup</a>
      <h1>{title}</h1>
    </div>

  );

  export default Header;