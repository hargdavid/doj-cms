export const linkObj = {
  name: 'link',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'link',
      title: 'Link',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'boolean',
      name: 'isButton',
      title: 'Button',
    },
  ],
}

export default {
  name: 'links',
  type: 'array',
  of: [
    {
      type: 'link',
      title: 'Link',
    },
  ],
}
