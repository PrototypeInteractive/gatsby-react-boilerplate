import React from 'react';

import './_how-to.scss';

const NewsListing = props =>
  (<section className="howto" id="howto">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="howto-title">How to</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ol className="howto-list">
            {props.data.map((item, i) =>
              (<li className="howto-list-item" key={i}>
                {item.title}
              </li>),
            )}
          </ol>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
