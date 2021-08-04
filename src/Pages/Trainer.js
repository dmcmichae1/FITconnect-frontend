import axios from 'axios';
import React from 'react';
import Nav from './Navbar';
import { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Trainer = () => {
    const [trainer, setTrainer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/trainer').then(result => {
            setTrainer(result.data.trainer);
            console.log(trainer)
        });
    }, [trainer]);


    return (<div>
        <h1>Our Trainers</h1>
        <Nav />
        <ul>
            {trainer.map(trainer =>
                <li key={trainer.trainerId}>
                    <Link to={`/${trainer.trainerId}`}>{trainer.firstName}</Link>
                </li>
            )}
        </ul>

    </div>);
}

export default withRouter(Trainer);