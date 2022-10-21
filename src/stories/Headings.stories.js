import React from "react";
import theme from '../gatsby-plugin-theme-ui/index';
import { Heading, ThemeProvider } from "theme-ui";

export default {
  title: "Base/Headings",
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = args => {
  return (
    <>
      <Heading as="h1">H1 - Heading 1</Heading>
      <Heading as="h2">H2 - Heading 2</Heading>
      <Heading as="h3">H3 - Heading 3</Heading>
      <Heading as="h4">H4 - Heading 4</Heading>
      <Heading as="h5">H5 - Heading 5</Heading>
      <Heading as="h6">H6 - Heading 6</Heading>
    </>
  )
}

export const Default = Template.bind({})
