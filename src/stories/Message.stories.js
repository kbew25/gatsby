import React from "react";
import theme from '../gatsby-plugin-theme-ui/index';
import { Message, ThemeProvider } from "theme-ui";

export default {
  title: "Base/Message",
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

const Template = args => <Message {...args}>Donec quo quod metus illum, tempus, pulvinar possimus. Beatae, odit reprehenderit animi? Distinctio fuga ut, laoreet cursus, sociis minim perspiciatis ornare!</Message>

export const Default = Template.bind({})

Default.args = {}
