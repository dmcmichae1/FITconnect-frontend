import axios from 'axios';
import React from 'react';
import Nav from './Navbar';
import { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Trainer.css';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/trainers').then(result => {
            setTrainers(result.data.trainers);
        });
    }, []);


    return (<div className="train">
        <h3>Our Trainers</h3>
        <Nav />
        <ul id="otis">
            {trainers.map(trainers =>
                <li key={trainers.trainerId}>
                    <Link to={`/${trainers.trainerId}`}>{trainers.firstName}</Link>
                </li>
            )}
        </ul>

    </div>);
}

export default withRouter(Trainers);