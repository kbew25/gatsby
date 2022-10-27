import React from "react";
import { Box, Flex, Paragraph, Text } from "theme-ui";

const Meta = ({
  date,
  term,
  lightColor
}) => {
  return (
    <Flex sx={{
      textTransform: 'uppercase',
      fontSize: '12px',
      color: lightColor ? '#fff' : null,
    }}>
      <Paragraph color={lightColor ? '#fff' : 'text'}>{term}</Paragraph>
      <Text px={2}>/</Text>
      <Box color={lightColor ? '#fff' : "secondary"}>{date}</Box>
    </Flex>
  )
}

export default Meta;
