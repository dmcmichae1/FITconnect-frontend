import axios from "axios";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link, useParams } from "react-router-dom";
import './ArticlesDetails.css';

const ArticlesDetail = ({ history }) => {

  const [articles, setArticles] = useState({});

  let { articleId } = useParams();

  useEffect(() => {
    console.log(articleId)
    //load Article from API
    const url = `http://localhost:3000/articles/${articleId}`;

    axios.get(url).then(result => {
      setArticles(result.data);
    }, err => {
      history.push('/');
    });
  }, [articleId, history]);


  return (
    <div className="css">
      {/* <h1>Services</h1> */}
      <h3>{articles.title}</h3>
      <p> {articles.body} </p>

      <Link to='/'>Articles</Link> |
      <Link to={`/edit/${articles.articleId}`}>Edit</Link>
    </div>
  );
};

export default withRouter(ArticlesDetail);