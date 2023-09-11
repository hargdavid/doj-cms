export const contentBlockWithImage = {
  name: 'contentWithImage',
  type: 'array',
  title: 'Innehåll',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'slug',
                title: 'Reference',
                to: [
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      name: 'image',
      title: 'Bild',
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
  ],
}

export const contentBlock = {
  name: 'content',
  type: 'array',
  title: 'Innehåll',
  of: [
    {
      type: 'block',
    },
  ],
}
