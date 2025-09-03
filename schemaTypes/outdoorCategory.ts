export default {
  name: 'category',
  title: 'Food Category (Outdoor)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'notification',
      title: 'Notification Name',
      type: 'string',
    },
    {
      name: 'foods',
      title: 'Foods',
      type: 'array',
      of: [{ type: 'foodReference' }],
    },
    {
      name: 'images',
      title: 'Category Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.min(1).error('Add at least one image for the carousel'),
    },
  ],
};