import React from "react";

import SlideCount from "./SlideCount"

export default {
  component: SlideCount,
  title: "Components/SlideCount",
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <SlideCount {...args} />

export const Default = Template.bind({})

Default.args = {
  count: 2
}
