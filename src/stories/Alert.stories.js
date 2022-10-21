import React from "react";
import theme from '../gatsby-plugin-theme-ui/index';
import { Alert, Close, ThemeProvider } from "theme-ui";

export default {
  title: "Base/Alerts",
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = args => <Alert {...args}>Beep boop, this is an alert!<Close ml="auto" mr={-2} /></Alert>

export const Success = Template.bind({})
export const Warning = Template.bind({})
export const Error = Template.bind({})
export const Info = Template.bind({})

Success.args = {
  variant: 'success'
}

Warning.args = {
  variant: 'warning'
}

Error.args = {
  variant: 'error'
}

Info.args = {
  variant: 'info'
}
