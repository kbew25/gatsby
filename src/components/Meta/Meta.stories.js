import React from "react";

import Meta from "./Meta"

export default {
  component: Meta,
  title: "Components/Meta",
  parameters: {
    layout: 'centered',
  },
}

const Template = args => <Meta {...args} />

export const Default = Template.bind({})

Default.args = {
  date: 'October 15 1985',
  term: 'Travel',
}
