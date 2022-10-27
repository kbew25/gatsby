import React from "react";

import HeroCarousel from "./HeroCarousel"

export default {
  component: HeroCarousel,
  title: "Components/Hero Carousel",
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

const Template = args => <HeroCarousel {...args} />

export const Default = Template.bind({})

Default.args = {
  slides: [
    {
      node: {
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
      large: true,
      slideCount: 1
    },
    {
      node: {
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
      large: true,
      slideCount: 2
    },
    {
      node: {
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
      large: true,
      slideCount: 3
    }
  ]
}
