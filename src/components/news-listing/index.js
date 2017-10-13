import React from 'react';
import News from '../news';

import './_news-listing.scss';

const NewsListing = props => (
  <section className="news-listing">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="news-listing-title">
            <h4>Latest News</h4>
          </div>
        </div>
      </div>
      <div className="row">
        {props.news.map(item => (
          <div className="col" key={item.id}>
            <News item={item} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsListing;
