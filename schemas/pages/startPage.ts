export default {
  name: 'startPage',
  type: 'document',
  title: 'Startsida',
  fields: [
    {type: 'hero', name: 'hero'},
    {
      type: 'contentWithImage',
      name: 'content',
    },
    {type: 'images', name: 'images'},
  ],
}
