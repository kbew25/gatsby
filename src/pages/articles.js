import React from "react";
import { graphql } from "gatsby";
import Article from "../components/Article/article";
import Layout from "../components/layout";
import { Grid } from "theme-ui";

export const query = graphql`
  query allArticles {
    allNodeArticle {
      edges {
        node {
          drupal_id
          nid: drupal_internal__nid
          title
          field_image {
            drupal_internal__target_id
          }
          relationships {
            field_image {
              relationships {
                field_media_image {
                  uri {
                    url
                  }
                  localFile {
                    childImageSharp {
                      gatsbyImageData(aspectRatio: 1.75, width: 640)
                    }
                  }
                }
              }
            }
          }
          body {
            processed
          }
          path {
            alias
          }
        }
      }
    }
  }
`;

const ArticlesPage = ({data}) => {
  return (
    <Layout>
      <Grid gap={2} columns={[1, 3, 3]}>
        {data.allNodeArticle.edges.map((article, i) => (
          <Article key={i} article={ article.node } />
        ))}
      </Grid>
    </Layout>
  )
}

export default ArticlesPage;
