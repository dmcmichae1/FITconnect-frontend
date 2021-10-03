import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { withRouter } from 'react-router';

const NewArticle = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createArticle = (e) => {
    e.preventDefault();

    if (title !== '' && body !== '') {
      const req = {
        title: title,
        body: body
      };

      const options = {
        headers: {
          'Authorization': `Bearer ${props.token}`
        }
      }
console.log('posting')
      axios.post('http://localhost:3000/articles', req, options).then(result => {
      console.log(result);  
      props.history.push('/articles')
      }, err => {
        localStorage.removeItem('myJWT');
        props.history.push('/login');
      });
    }
  };

  return (<div >
    <h1>Create a Article</h1>
    <div className="css"><form onSubmit={createArticle}>
      <label>Title</label>
      <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
      <br></br>
      <label>Description</label>
      <input type="text" name="body" onChange={e => setBody(e.target.value)} />
      <button>Create!</button>
    </form>
    </div>
  </div>);
};


export default withRouter(NewArticle);
