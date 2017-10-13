/* global graphql */

import React from 'react';
import NewsListing from '../components/news-listing';

const IndexPage = props =>
  (<div>
    <NewsListing news={props.data.allDataJson.edges[0].node.news} />
  </div>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          news {
            id
            title
            summary
          }
        }
      }
    }
  }
`;
