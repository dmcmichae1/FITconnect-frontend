import React from 'react';
import Nav from './Navbar';
import './home.css';
import myImage from '../image/fitconnect4.jpeg';



const Home = () => (

  <div>
    <Nav />
  <h1 className="font-semibold text-3xl lg:text-5xl">Connect. Move. Grow. </h1>
    <img src={myImage} alt="" />
  </div>

);

export default Home;

