import * as React from "react";
import Lottie from "lottie-react";
import spookyAnimation from "../content/spooky-pumpkin.json";

import { Box, Grid } from "theme-ui";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import Teaser from "../components/Teaser/Teaser";
import Section from "../components/Section";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Feature from "../components/Feature/Feature";

export const query = graphql`
  query allArticles {
    allNodeArticle(
      sort: {fields: created, order: DESC}
    ) {
      edges {
        node {
          created(formatString: "MMMM DD Y")
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
                      gatsbyImageData(width: 940)
                    }
                  }
                }
              }
            }
            field_category {
              name
            }
          }
          body {
            processed
          }
          path {
            alias
          }
          field_rating
          field_type
        }
      }
    }
  }
`;

const IndexPage = ({data}) => {

  const news = data.allNodeArticle.edges.filter(obj => {
    return obj.node.field_type === 'news'
  });

  const reviews = data.allNodeArticle.edges.filter(obj => {
    return obj.node.field_type === 'review'
  });

  const slides = reviews.slice(0,3);

  return (
    <Layout>
      <Seo title="Home" />
      <Box>
        <Box sx={{ width: '200px'}} mx="auto">
          <Lottie animationData={spookyAnimation} />
        </Box>
      </Box>
      <Section bottom={6}>
        <Grid gap={2} columns={['2fr 1fr']}>
          <HeroCarousel slides={slides} />
          <Box>
            <Feature article={reviews[3].node} sx={{ mb: 2 }} />
            <Feature article={reviews[2].node} />
          </Box>
        </Grid>
      </Section>
      <Section title="Latest news" bottom="0" bg="muted">
        <Grid gap={2} columns={[1, 3, 3]}>
          {news.map((article, i) => {
            if (i < 3) {
              return (
                <Teaser key={i} article={ article.node } />
              )
            }
            return null;
          })}
        </Grid>
      </Section>
      <Section title="Latest reviews" bottom="0" top={6}>
        <Grid gap={2} columns={[1, 2, '2fr 1fr 1fr']}>
          {reviews.map((article, i) => {
            if (i === 0) {
              return (
                <Teaser key={i} article={ article.node } sx={{
                  gridRow: [null, null, '1 / 3'],
                }} large />
              )
            }
            if (i > 0 && i < 5) {
              article.node.body = null;
              return (
                <Teaser key={i} article={ article.node } />
              )
            }
            return null;
          })}
        </Grid>
      </Section>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
