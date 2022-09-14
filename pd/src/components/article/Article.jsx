import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, text, link }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p className="datetext">{date}</p>
        <a href={link} className="paonetext">{text}</a>
      </div>
    </div>
  </div>
);

export default Article;
