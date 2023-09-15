export default {
  name: 'contentPage',
  type: 'document',
  title: 'ContentPage',
  fields: [
    {
      name: "hero",
      type: "hero"
    },
    {
      name: 'path',
      type: 'string',
      title: 'Path',
    },
    {
      type: 'contentWithImage',
      name: 'content',
    },
    {type: 'images', name: 'images'},
  ],
}

export const contentContainer = {
  name: 'contentContainer',
  type: 'array',
  title: 'Innehåll',
  of: [
    {
      type: 'contentWithImage',
      name: 'content',
    },
    {
      type: 'textAndImage',
      name: 'textAndImage',
    },
  ],
}
