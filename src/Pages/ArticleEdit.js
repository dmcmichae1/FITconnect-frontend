import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link, useParams } from "react-router-dom";
import './ArticleEdit.css';

const ArticleEdit = (props) => {


  const [articles, setArticles] = useState({
    title: '',
    body: ''
  });

  let { articleId } = useParams();
  console.log({ articleId });

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

      const url = 'http://localhost:3000/articles/' + articles.articleId;
      axios.put(url, req, options).then(result => {
        props.history.push(`/${articles.articleId}`)
        props.history.push("/articles")
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

    const url = 'http://localhost:3000/articles/' + articles.articleId;
    axios.delete(url, options).then(result => {
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
      setArticles(result.data);
    }, err => {
      props.history.push('/');
    });
  }, [articleId, props.history]);



  return (
    <div className="css">
      <form onSubmit={updateArticle}>
        <h2>Edit {articles.title}</h2>
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
            body: e.target.value
          })} />
        <button type="submit">Update!</button>
      </form>
      <Link to={`/${articles.articleId}`}> Articles </Link>

      <br></br>
      <button onClick={deleteArticle}>Delete Article</button>
    </div>
  );
};

export default withRouter(ArticleEdit);