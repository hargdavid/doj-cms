export default {
  name: 'meta',
  type: 'object',
  title: 'Meta',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'image',
      name: 'logo',
      title: 'Logo',
    },
    {
      type: 'string',
      name: 'description',
      title: 'Description',
    },
    {
      type: 'string',
      name: 'keywords',
      title: 'Keywords',
      description:
        'Add relevant words that describe your site eg: (cars, used cars, selling cars) separate with ,',
    },
    {
      type: 'favicon',
      name: 'favicon',
      title: 'Favicon',
    },
    {
      type: "social",
      name: "social"
    }
  ],
}
