import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { GatsbyImage, getImage, Placeholder } from 'gatsby-plugin-image';
import { Card, Link, Box, Heading, Flex } from "theme-ui";
import Meta from "../Meta/Meta";
import SlideCount from "../SlideCount/SlideCount";

const Feature = ({ article, ...props }) => {
  let image = article.relationships.field_image ? article.relationships.field_image.relationships.field_media_image.localFile : null;
  const sizes = props.large ? {
    width: 940,
    height: 613
  } : {
    width: 450,
    height: 290
  };


  if (image) {
    image.childImageSharp.gatsbyImageData.width = sizes.width;
    image.childImageSharp.gatsbyImageData.height = sizes.height;
  }

  return (
    <Card variant="feature" key={article.nid} sx={{
      display: 'flex',
      position: 'relative',
      ...props.sx
    }}>
      <Box sx={{
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(64,64,64,0.5)'
        }
      }}>
        { image ? <GatsbyImage image={getImage(image)} alt="meh" /> : <Placeholder fallback={`https://via.placeholder.com/${sizes.width}x${sizes.height}`} width={sizes.width} /> }
      </Box>

      <Flex sx={{
        flexDirection: 'column',
        alignContent: '',
        position: 'absolute',
        bottom: 4,
        left: 4,
        color: '#fff'
      }}>
        {props.slideCount && (
          <Box pb={3}>
            <SlideCount count={props.slideCount} />
          </Box>
        )}
        <Heading as="h2" mb={2} color="#fff"><Link to={`/node/` + article.nid} as={GatsbyLink}>{ article.title }</Link></Heading>
        <Meta
          date={article.created}
          term={article.relationships.field_category.name}
          lightColor="true"
        />
      </Flex>

    </Card>
  )
}

export default Feature;
