import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage, Placeholder } from 'gatsby-plugin-image';
import { Card, Link, Box, Heading } from "theme-ui";
import placeholderImg from "../../images/example.png";

const Article = ({ article }) => {

  const image = article.relationships.field_image ? getImage(article.relationships.field_image.relationships.field_media_image.localFile) : null;

  return (
    <Card key={article.nid} mb={4} variant={ article }>
      { image ? <GatsbyImage image={image} alt="meh" width={452} height={247} aspectRatio={2/1} /> : <Placeholder fallback={placeholderImg} height={213}   /> }
      <Box p={2}>
        <Heading as="h2"><Link to={`/node/` + article.nid} as={GatsbyLink}>{ article.title }</Link></Heading>
        <Box dangerouslySetInnerHTML={{__html: article.body.processed}}></Box>
      </Box>
    </Card>
  )
}

export default Article;
