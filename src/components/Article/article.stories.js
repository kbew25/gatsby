import React from "react";

import Article from "./article"

export default {
  component: Article,
  title: "Components/Article",
}

const Template = args => <Article {...args} />

export const Default = Template.bind({})

Default.args = {
  article: {
    relationships: {
      field_image: null
    },
    title: "This is an article",
    nid: 1,
    body: {
      processed: '<p>Hic quas natus voluptas tellus quos dictumst explicabo leo? Unde eros quasi iste mollis. Quisque! Primis! Sem sem mauris ligula magnis quae mauris aperiam eveniet viverra platea interdum sodales bibendum, primis erat proin dolorum dictum primis! Magna. Impedit! Reprehenderit libero, commodi quod habitant molestiae deleniti eaque necessitatibus eros laborum quasi.</p>'
    }
  }
}
