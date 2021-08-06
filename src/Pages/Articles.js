import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/articles').then(result => {
      console.log(result);
      setArticles(result.data.articles);
      console.log(articles)
    });
  }, []);

return (
  <div className="css">
    <h3>Services</h3>

    <ul>

      {articles.map(article =>
        <li key={article.articleId}>
          <Link to={`/${article.articleId}`}>{article.title}</Link>
        </li>


      )}
    </ul>
    <Link to="/new">Create a Article</Link>
  </div>);
}

export default withRouter(Articles);