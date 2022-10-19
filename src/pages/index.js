import * as React from "react"
import Lottie from "lottie-react";
import spookyAnimation from "../content/spooky-pumpkin.json";

import { Box, Heading } from "theme-ui";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticlesPage from "./articles";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Box>
      <Heading as="h1" sx={{ textAlign: 'center' }}>
        Welcome
      </Heading>
      <Box sx={{ width: '200px'}} mx="auto">
        <Lottie animationData={spookyAnimation} />
      </Box>
    </Box>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
