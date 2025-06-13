export default {
    name: 'hideout',
    title: 'Hideout',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'foodMenu',
        title: 'Food Menu',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
      },
      {
        name: 'drinksMenu',
        title: 'Drinks Menu',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category2' }] }],
      },
    ],
  };