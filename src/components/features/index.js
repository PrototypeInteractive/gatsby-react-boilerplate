import React from 'react';
import './_features.scss';

import { StaticQuery, graphql } from 'gatsby';

const Features = () => (
    <StaticQuery
        query={ graphql`
      query FeaturesQuery {
        allDataJson {
          edges {
            node {
              features {
                title
              }
            }
          }
        }
      }
    ` }
        render={ (data) => (
            <section className="features" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="features-title">Features</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="features-list">
                                {data.allDataJson.edges[0].node.features.map((item, i) => (
                                    <li className="features-list-item" key={ i }>
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        ) } />
);

export default Features;
