import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage, Placeholder } from 'gatsby-plugin-image';
import { Card, Link, Box, Heading, Flex } from "theme-ui";
import Meta from "../Meta/Meta";
import Rating from "../Rating/Rating";

const Teaser = ({ article, ...props }) => {

  const image = article.relationships.field_image ? getImage(article.relationships.field_image.relationships.field_media_image.localFile) : null;
  const body = article.body?.processed;
  const excerpt = body && body.length > 50 ? body.substring(0, 150) + "..." : body;

  return (
    <Card key={article.nid} mb={4} variant={ article } sx={{
      display: 'flex',
      flexDirection: 'column',
      ...props.sx
    }}>
      <Box>
        { image ? <GatsbyImage image={image} alt="meh" layout="fixed" width={550} height={300} /> : <Placeholder fallback="https://via.placeholder.com/550x300" /> }

        {article.field_rating && article.field_type !== 'news' && (
          <Rating rating={article.field_rating} sx={{
            mb: '-25px',
            mr: 3,
            mt: '-55px',
            ml: 'auto',
            transform: 'scale(0.6)',
          }} />
        )}
      </Box>
      <Flex p={4} bg="background" sx={{
        flexDirection: 'column',
        borderBottom: t => `3px solid ${t.colors.muted}`,
        height: '100%',
        '&:hover': {
          borderBottomColor: 'primary',
        }
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
      </Flex>
    </Card>
  )
}

export default Teaser;
