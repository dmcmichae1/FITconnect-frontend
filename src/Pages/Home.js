import React from 'react';
import Nav from './Navbar';
import './home.css';
import myImage from '../image/fitconnect4.jpeg';



const Home = () => (


  <div>

    <Nav />

    <div class="btn-group">
      <button type="button" class="btn btn-primary btn-lg">Login</button>
      <button type="button" class="btn btn-primary btn-lg">Signup</button>

    </div>
    <img src={myImage} alt="" />


  </div>






);

export default Home;

