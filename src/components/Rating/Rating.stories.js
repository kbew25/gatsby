import React from "react";
import Rating from "./Rating"

export default {
  component: Rating,
  title: "Components/Rating",
  parameters: {
    layout: 'centered',
  },
}

const Template = args => <Rating {...args} />

export const Default = Template.bind({})

Default.args = {
  rating: '7.8'
}
