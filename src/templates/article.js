import React from "react";
import { graphql } from "gatsby";
import { Box, Card, Container, Heading } from "theme-ui";
import Layout from "../components/Layout";

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
      <Container>
        <Box key={data.nodeArticle.nid} mb={4} as="article">
          <Heading as="h1" variant="pageTitle">{ data.nodeArticle.title }</Heading>
          <Box dangerouslySetInnerHTML={{__html: data.nodeArticle.body.processed}}></Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default ArticlePage;
