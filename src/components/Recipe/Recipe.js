import React from "react";
import { Card, Heading, Box, Image, Grid } from "theme-ui";

const Recipe = ({ props }) => {
  return (
    <Card mb={4}>
      <Grid gap={4} columns={'2fr 1fr'}>
        <Box>
          <Heading as="h2">{props.name}</Heading>
          <Heading as="h3">Method:</Heading>
          <ol>
            {props.steps.map((step) => (<li>{step}</li>))}
          </ol>
          <Heading as="h3" mt={4}>Ingredients:</Heading>
          <Box as="ul" sx={{
            columns: 2
          }}>
            {props.ingredients.map((ingredient) => (<li>{ingredient.quantity} of {ingredient.name}</li>))}
          </Box>
        </Box>
        <Box>
          {props.imageURL && (
            <Image
            src={props.imageURL}
            alt={props.name}
            width={250}
            sx={{
              alignSelf: 'flex-start',
              mb: 4,
              ml: 'auto',
              display: 'block'
            }}
            />
            )}
        </Box>
      </Grid>
    </Card>
  )
}

export default Recipe;
