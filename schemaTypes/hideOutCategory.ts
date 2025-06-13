export default {
    name: 'category4',
    title: 'Food Category (Hideouts)',
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
        name: 'image',
        title: 'Category Image',
        type: 'image',
        options: {
          hotspot: true, 
        },
      },
    ],
  };