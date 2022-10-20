import React from "react";
import { Box, Flex, Paragraph, Text } from "theme-ui";

const Meta = ({
  date,
  term
}) => {
  return (
    <Flex sx={{
      textTransform: 'uppercase',
      fontSize: '12px',
    }}>
      <Paragraph color="text">{term}</Paragraph>
      <Text px={2}>/</Text>
      <Box color="secondary">{date}</Box>
    </Flex>
  )
}

export default Meta;
