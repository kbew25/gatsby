import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import recipes from "../content/recipes.json";
import { Heading } from "theme-ui";
import Recipe from "../components/recipe";

const SecondPage = () => (
  <Layout>
    <Heading as="h1" sx={{ textAlign: 'center' }}>Recipes</Heading>
    <ul>
    {recipes.map((data, index) => {
        return <Recipe key={`content_item_${index}`} props={data} />
      })}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
