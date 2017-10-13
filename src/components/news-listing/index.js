import React from "react";
import News from "../news";

import "./_news-listing.scss";

export default class NewsListing extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="news-listing">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="news-listing-title">
                <h4>Latest News</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {this.props.news.map(item => {
              return (
                <div className="col" key={item.id} >
                  <News item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
