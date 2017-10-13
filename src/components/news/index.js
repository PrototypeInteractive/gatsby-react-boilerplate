import React from 'react';
import Button from '../button';

const News = props => (
  <div className="news">
    <div className="news-title">
      {props.item.title}
    </div>
    <div className="news-summary">
      {props.item.summary}
    </div>
    <Button className="button-orange" link="#" text="Read More" />
  </div>
);

export default News;
