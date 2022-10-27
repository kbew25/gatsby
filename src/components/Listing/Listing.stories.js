import React from "react";

import Listing from "./Listing"

export default {
  component: Listing,
  title: "Components/Listing",
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '920px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <Listing {...args} />

export const Default = Template.bind({})

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
    field_type: 'review',
    field_rating: '7.5',
    created: 'April 10 2022',
  },
}
