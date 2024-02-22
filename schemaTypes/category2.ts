
export default {
    name: 'category2',
    title: 'Drink Category',
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
    ],
  };
  