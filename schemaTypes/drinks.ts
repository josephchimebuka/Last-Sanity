// schemas/drinks.ts
export default {
    name: 'drink',
    title: 'Drink Item',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Drink Name',
        type: 'string',
      },
      {
        name: 'inBracket',
        title: 'In Bracket',
        type: 'string',
      },
      {
        name: 'priceOutdoor',
        title: 'Price (Outdoor)',
        type: 'number',
      },
      {
        name: 'priceHideout',
        title: 'Price (Hideout)',
        type: 'number',
      },
    ],
  };
  