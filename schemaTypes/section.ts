export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Section Name',
      type: 'string',
      options: {
        list: [
          { title: 'Outdoor', value: 'outdoor' },
          { title: 'Hideout', value: 'hideout' },
        ],
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
  ],
};