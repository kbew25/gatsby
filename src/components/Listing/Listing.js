import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage, Placeholder } from 'gatsby-plugin-image';
import { Card, Link, Box, Heading, Flex } from "theme-ui";
import Meta from "../Meta/Meta";
import Rating from "../Rating/Rating";

const Listing = ({ article, ...props }) => {
  const image = article.relationships.field_image ? getImage(article.relationships.field_image.relationships.field_media_image.localFile) : null;
  const body = article.body?.processed;
  const excerpt = body && body.length > 50 ? body.substring(0, 150) + "..." : body;

  return (
    <Card variant="listing" key={article.nid} mb={4} sx={{
      display: 'flex',
      ...props.sx
    }}>
      <Box>
        { image ? <GatsbyImage image={image} alt="meh" layout="fixed" width={300} height={180} /> : <Placeholder fallback="https://via.placeholder.com/300x180" width="300" /> }
      </Box>

      <Flex pl={4} pr={5} mb={3} sx={{
        flexDirection: 'column',
        flex: '1 1 0',
        position: 'relative',
      }}>
        <Heading as="h2" mb={0}><Link to={`/node/` + article.nid} as={GatsbyLink}>{ article.title }</Link></Heading>
        {excerpt && (
          <Box dangerouslySetInnerHTML={{__html: excerpt}} sx={{
            flex: '1 1 0',
          }}></Box>
        )}
        <Meta
          date={article.created}
          term={article.relationships.field_category.name}
          />
        {article.field_rating && article.field_type !== 'news' && (
          <Rating rating={article.field_rating} sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            transform: 'scale(0.6) translateY(-33%)',
          }} />
        )}
      </Flex>
    </Card>
  )
}

export default Listing;
