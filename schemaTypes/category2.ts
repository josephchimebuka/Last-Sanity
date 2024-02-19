// schemas/category.js
export default {
    name: 'category2',
    title: 'Category2',
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
  