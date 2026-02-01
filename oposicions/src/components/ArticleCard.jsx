import React from 'react';

// Displays a single article or subsection of a law.
// For now this component only renders a title and placeholder body.

function ArticleCard({ articleNumber, children }) {
  return (
    <div className="article-card">
      <h3>Article {articleNumber}</h3>
      <div className="article-body">
        {children /* Body content goes here */}
      </div>
    </div>
  );
}

export default ArticleCard;
