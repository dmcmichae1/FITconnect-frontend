import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/articles').then(result => {
      console.log(result);
      setArticles(result.data);
    });
  }, []);

  return (<div>
    <h1>My services and Articles</h1>
    <ul>
      {articles.map(articles =>
        <li key={articles.id}>
          {articles.title}
        </li>)}
    </ul>
    <Link to="/new">Create a Article</Link>
  </div>);
}

export default withRouter(Articles);