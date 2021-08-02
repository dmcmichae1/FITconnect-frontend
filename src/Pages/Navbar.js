import React from 'react';
import myImage from '../image/fitconnect.png';

const Navbar = () => {


        return (
                <div className="topnav" id="myTopnav">
                        <img src={myImage} alt="" />
                        <a href="/trainer" >Trainer</a>
                        <a href="/signup" >Signup</a>
                        <a href="/login"  >Login</a>
                        <a href="/home" >Home</a>

                </div>

        )



};

export default Navbar;