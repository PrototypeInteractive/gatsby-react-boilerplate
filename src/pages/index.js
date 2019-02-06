import React from "react";
import Features from "../components/features";
import HowTo from "../components/how-to";
import Layout from "../components/layout";

const IndexPage = props => (
  <Layout>
    <main>
      <Features />
      <HowTo />
    </main>
  </Layout>
);

export default IndexPage;
