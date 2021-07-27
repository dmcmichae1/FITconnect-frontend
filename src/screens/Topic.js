import React from 'react';
import Navbar from '../components/Navbar';





const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Topic;
