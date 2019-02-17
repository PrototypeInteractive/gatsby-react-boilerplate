import React from 'react';

import './_how-to.scss';

import { StaticQuery, graphql } from 'gatsby';

const HowTos = () => (
    <StaticQuery
        query={ graphql`
      query HowtoQuery {
        allDataJson {
          edges {
            node {
              howTo {
                title
              }
            }
          }
        }
      }
    ` }
        render={ (data) => (
            <section className="howto" id="howto">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="howto-title">How to</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ol className="howto-list">
                                {data.allDataJson.edges[0].node.howTo.map((item, i) => (
                                    <li className="howto-list-item" key={ i }>
                                        {item.title}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        ) } />
);

export default HowTos;
