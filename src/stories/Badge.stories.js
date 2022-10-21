import React from "react";
import theme from '../gatsby-plugin-theme-ui/index';
import { Badge, ThemeProvider } from "theme-ui";

export default {
  title: "Base/Badge",
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

const Template = args => <Badge {...args}>Badge</Badge>

export const Default = Template.bind({})
Default.args = {}
