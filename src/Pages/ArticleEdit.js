import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link, useParams } from "react-router-dom";

const ArticleEdit = (props) => {

  const [articles, setArticles] = useState({
    title: '',
    description: ''
  });


  let { articleId } = useParams();

  const updateArticle = (e) => {
    e.preventDefault();

    if (articles.title !== '' && articles.body !== '') {
      const req = {
        ...articles
      };

      const options = {
        headers: {
          'Authorization': `Bearer ${props.token}`
        }
      }

      const url = 'http://localhost:3000/articles/' + articles.id;
      axios.put(url, req, options).then(result => {
        console.log(result.data);
        props.history.push(`/${articles.id}`)
      }, err => {
        localStorage.removeItem('myJWT');
        props.history.push('/login');
      });
    }
  };


  const deleteArticle = () => {
    const token = localStorage.getItem('myJWT');

    const options = {
      headers: {
        'Authorization': `Bearer ${props.token}`
      }
    }

    const url = 'http://localhost:3000/articles/' + articles.id;
    axios.delete(url, options).then(result => {
      console.log(result.data);
      props.history.push('/articles')
    }, err => {
      localStorage.removeItem('myJWT');
      props.history.push('/login');
    });
  };

useEffect(() => {
  //load Article from API
  const url = `http://localhost:3000/articles/${articleId}`;

  axios.get(url).then(result => {
    console.log(result);
    setArticles(result.data);
  }, err => {
    props.history.push('/');
  });
}, [articleId, props.history]);



return (
  <div>
    <form onSubmit={updateArticle}>
      <h1>Edit {articles.tite}</h1>
      <label>Title</label>
      <input type="text" name="title" onChange={e =>
        setArticles({
          ...articles,
          title: e.target.value
        })} />
      <label>Description</label>
      <input type="text" name="body" onChange={e =>
        setArticles({
          ...articles,
          description: e.target.value
        })} />
      <button>Update!</button>
    </form>
    <Link to={`/${articles.id}`}> Articles </Link>

    <br></br>
    <button onClick={deleteArticle}>Delete Article</button>
  </div>
);
};

export default withRouter(ArticleEdit);