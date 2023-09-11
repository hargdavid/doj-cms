export default {
    name: 'startPage',
    type: 'document',
    title: 'Startsida',
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
        name: "button",
        type: "link",
        title: "Heroknapp"
      },
      {
        type: 'contentWithImage',
        name: 'content',
      },
      {type: 'images', name: 'images'},
    ],
  }
  