import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link, useParams } from "react-router-dom";

const ArticlesDetail = ({ history }) => {

  const [articles, setArticles] = useState({});

  let { articleId } = useParams();

  useEffect(() => {
    console.log(articleId)
    //load Article from API
    const url = `http://localhost:3000/articles/${articleId}`;

    axios.get(url).then(result => {
      console.log(result);
      setArticles(result.data);
    }, err => {
      history.push('/');
      console.log(err)
    });
  }, [articleId, history]);


  return (
    <div>
      <h1>Services</h1>
      <h2>{articles.title}</h2>
      <p> {articles.body} </p>

      <Link to='/'>Articles</Link> |
      <Link to={`/${articles.articleId}/edit`}>Edit</Link>
    </div>
  );
};

export default withRouter(ArticlesDetail);