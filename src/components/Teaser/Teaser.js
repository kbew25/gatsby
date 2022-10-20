import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage, Placeholder } from 'gatsby-plugin-image';
import { Card, Link, Box, Heading, Flex } from "theme-ui";
import Meta from "../Meta/Meta";

const Teaser = ({ article }) => {

  const image = article.relationships.field_image ? getImage(article.relationships.field_image.relationships.field_media_image.localFile) : null;
  const body = article.body?.processed;
  const excerpt = body && body.length > 50 ? body.substring(0, 150) + "..." : body;

  return (
    <Card key={article.nid} mb={4} variant={ article } sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box>
        { image ? <GatsbyImage image={image} alt="meh" layout="fixed" width={440} height={240} /> : <Placeholder fallback="https://via.placeholder.com/440x240" /> }

        {article.field_rating && article.field_type !== 'news' && (
          <Box sx={{
            position: 'relative',
            height: '80px',
            mb: '-25px',
            mr: 3,
            mt: '-55px',
            textAlign: 'right',
          }}>
            <Box as="span" sx={{
              color: 'primary',
              position: 'absolute',
              right: '40px',
              top: '40px',
              transform: 'translate(50%, -50%)',
              zIndex: '2',
              fontSize: 4,
            }}>{ article.field_rating }</Box>
            <svg height="80" width="80">
              <circle stroke="#fff" stroke-width="2" fill="#fff" r="38" cx="40" cy="40" />
              <circle stroke="#f26a6e" stroke-width="3" fill="transparent" r="38" cx="40" cy="40" stroke-dasharray={ (80 * 3.14) } stroke-dashoffset={ ((80 * 3.14) - (article.field_rating * 10) / 100 * (80 * 3.14)) || '260px' } style={{
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%',
                transition: '1s stroke-dashoffset',
              }} />
            </svg>
          </Box>
        )}
      </Box>
      <Flex p={4} bg="background" sx={{
        flexDirection: 'column',
        borderBottom: t => `3px solid ${t.colors.background}`,
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
