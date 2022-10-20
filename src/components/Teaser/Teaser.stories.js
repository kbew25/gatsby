import React from "react";

import Teaser from "./Teaser"

export default {
  component: Teaser,
  title: "Components/Teaser",
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '440px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <Teaser {...args} />

export const Default = Template.bind({})
export const Rating = Template.bind({})
export const NoBody = Template.bind({})

Default.args = {
  article: {
    relationships: {
      field_image: null,
      field_category: { name: 'Travel' }
    },
    title: "This is an article",
    nid: 1,
    body: {
      processed: '<p>Hic quas natus voluptas tellus quos dictumst explicabo leo? Unde eros quasi iste mollis. Quisque! Primis! Sem sem mauris ligula magnis quae mauris aperiam eveniet viverra platea interdum sodales bibendum, primis erat proin dolorum dictum primis! Magna. Impedit! Reprehenderit libero, commodi quod habitant molestiae deleniti eaque necessitatibus eros laborum quasi.</p>'
    },
    field_type: 'news',
    field_rating: null,
    created: 'April 10 2022',
  },
}

Rating.args = {
  article: {
    ...Default.args.article,
    field_type: 'review',
    field_rating: '4.6',
  },
}

NoBody.args = {
  article: {
    ...Default.args.article,
    body: null,
  },
}
