export default {
  name: 'category2',
  title: 'Drink Category (Outdoor)',
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
      name: 'drink',
      title: 'Drinks',
      type: 'array',
      of: [{ type: 'drinkReference' }],
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true, 
      },
    },
  ],
};