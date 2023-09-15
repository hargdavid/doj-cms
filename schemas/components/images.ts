export default {
  type: 'array',
  name: 'images',
  of: [
    {
      type: 'imageWithLink',
      name: 'imageWithLink',
    },
  ],
}

export const imageWithLink = {
  type: 'object',
  name: 'imageWithLink',
  fields: [
    {
      type: 'image',
      name: 'image',
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
      type: "string",
      title: "Title",
      name: "title",
    },
    {
      type: "string",
      title: "Description",
      name: "description",
    },
    {
      name: 'link',
      type: 'object',
      title: 'Link',
      fields: [
        {
          name: 'reference',
          type: 'slug',
          title: 'URL',
        },
        {
          title: 'Open in new tab',
          name: 'blank',
          type: 'boolean',
        },
      ],
    },
  ],
}
