interface FoodReference {
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

interface Field {
  name: string;
  title: string;
  type: string;
  of?: (FoodReference | Image)[];
  validation?: (Rule: any) => any;
}

interface Category4 {
  name: string;
  title: string;
  type: string;
  fields: Field[];
}

const schema: Category4 = {
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

export default schema;
