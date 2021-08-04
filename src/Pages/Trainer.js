 import axios from 'axios';
import React from 'react';
import Nav from './Navbar';
import { useEffect, useState } from 'react';

 const Trainer = () => {
     const [trainer, setTrainer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/trainer').then(result => {
            
            setTrainer(result.data.trainer);
            
        });
    }, [trainer]);


     return (<div>
         <h1>Our Trainers</h1>
         <ul>
            { trainer.map(trainer =>
            <li key={trainer.id}>
                {trainer.firstName}
                    
            </li>
         )}
         </ul>
         <Nav />

     </div>);
       
    } 
       
      
     

  

 

export default Trainer;