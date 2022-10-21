import React from "react";
import { Container, Box, Heading } from "theme-ui";

const Section = ({ children, ...props }) => {
  return (
    <Box as="section" p={4} pb={props.bottom || 4} bg={props.bg} mt={props.top}>
      <Container sx={{
        position: 'relative'
      }}>
        {props.title && (
          <Heading as="h2" sx={{
            position: 'absolute',
            left: 0,
            top: `-${4}`,
            transform: 'translateY(-100%)',
            mb: 0,
            '&::after': {
              content: '""',
              width: '80px',
              height: '3px',
              display: 'block',
              bg: 'primary',
              mt: '20px',
            }
          }}>{props.title}</Heading>
        )}
        { children }
      </Container>
    </Box>
  )
}

export default Section;
