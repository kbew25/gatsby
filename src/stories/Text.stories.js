import React from "react";
import theme from '../gatsby-plugin-theme-ui/index';
import { Paragraph, Link, ThemeProvider } from "theme-ui";

export default {
  title: "Base/Text",
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

const Template = args => <Paragraph>Paragraph - Vestibulum distinctio <u>porttitor</u>. Dictum habitant viverra atque animi? Ut accusamus porta cumque? Repudiandae. Suscipit consectetuer <em>consequat harum</em>, nihil, feugiat delectus rem. Vehicula ullam wisi ratione pellentesque vulputate nemo rhoncus nesciunt eos mi, in? Sociosqu sed <strong>exercitationem</strong>? Necessitatibus urna lorem iste, <Link href="#">Link</Link> soluta justo cupidatat quibusdam possimus, laboriosam id ratione, dolorum blandit.</Paragraph>

export const Default = Template.bind({})

Default.args = {}
