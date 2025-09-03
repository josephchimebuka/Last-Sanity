interface DrinkReference {
  type: string;
}

interface ImageField {
  name: string;
  title: string;
  type: string;
}

interface Image {
  type: string;
  options: {
    hotspot: boolean;
  };
  fields: ImageField[];
}

interface OutdoorCategory2 {
  name: string;
  title: string;
  type: string;
  fields: (
    | {
        name: string;
        title: string;
        type: string;
      }
    | {
        name: string;
        title: string;
        type: string;
        of: DrinkReference[];
      }
    | {
        name: string;
        title: string;
        type: string;
        of: Image[];
        validation: (Rule: any) => any;
      }
  )[];
}

const outdoorCategory2: OutdoorCategory2 = {
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
      validation: (Rule) =>
        Rule.min(1).error('Add at least one image for the carousel'),
    },
  ],
};

export default outdoorCategory2;
