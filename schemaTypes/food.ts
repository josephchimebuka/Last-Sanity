export default {
  name: 'food',
  title: 'Food Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Food Name',
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
    }
  ],
};