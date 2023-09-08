export default {
  name: 'textAndImage',
  type: 'object',
  title: 'Text och bild',
  fields: [
    {
      type: 'content',
      name: "text"
    },
    {
      type: 'image',
      name: 'image',
      title: 'Bild',
    },
    {
      type: 'boolean',
      name: 'isLeft',
      title: 'Vänsterställd?',
      default: false,
    },
  ],
}
