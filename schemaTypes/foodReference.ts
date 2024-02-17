// schemas/foodReference.js
export default {
    name: 'foodReference',
    title: 'Food Reference',
    type: 'reference',
    to: [{ type: 'food' }],
  };
  