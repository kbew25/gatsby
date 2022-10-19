import React from "react";
import { graphql } from "gatsby";
import { Box, Card, Heading } from "theme-ui";
import Layout from "../components/layout";

export const query = graphql`
  query articlePage($drupal_id: String!) {
    nodeArticle(drupal_id: {eq: $drupal_id}) {
      title
      drupal_id
      nid: drupal_internal__nid
      body {
        processed
      }
    }
  }
`;

const ArticlePage = ({data}) => {

  return (
    <Layout>
      <Card key={data.nodeArticle.nid} mb={4}>
        <Heading as="h2">{ data.nodeArticle.title }</Heading>
        <Box dangerouslySetInnerHTML={{__html: data.nodeArticle.body.processed}}></Box>
      </Card>
    </Layout>
  )
}

export default ArticlePage;
