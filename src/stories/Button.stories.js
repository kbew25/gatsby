import React from "react";
import theme from '../gatsby-plugin-theme-ui/index';
import { Button, ThemeProvider } from "theme-ui";

export default {
  component: Button,
  title: "Base/Buttons",
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

const Template = args => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
  variant: 'primary'
}

Secondary.args = {
  variant: 'secondary'
}
