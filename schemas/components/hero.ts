export default {
  type: 'object',
  title: 'Hero',
  name: 'hero',
  fields: [
    {
      type: 'image',
      name: 'heroImage',
      title: 'Image',
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
      type: 'image',
      name: 'mobileImage',
      title: 'Mobile image',
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
      name: 'video',
      type: 'video',
      title: 'Video',
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
      name: 'button',
      type: 'link',
      title: 'Heroknapp',
    },
  ],
}
