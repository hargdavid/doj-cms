export default {
  name: 'contentPage',
  type: 'document',
  title: 'ContentPage',
  fields: [
    {
      type: 'image',
      name: 'heroImage',
      title: 'Hero',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
        },
      ],
    },
    {
      name: 'path',
      type: 'string',
      title: 'Path',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
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
