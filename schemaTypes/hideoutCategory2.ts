interface DrinkReference {
  type: string;
}

interface ImageField {
  name: string;
  title: string;
  type: string;
}

interface ImageOptions {
  hotspot: boolean;
}

interface Image {
  type: string;
  options: ImageOptions;
  fields: ImageField[];
}

interface Field {
  name: string;
  title: string;
  type: string;
  of?: (DrinkReference | Image)[];
  validation?: (Rule: any) => any;
}

interface SchemaType {
  name: string;
  title: string;
  type: string;
  fields: Field[];
}

const schema: SchemaType = {
  name: 'category3',
  title: 'Drink Category (Hideouts)',
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

export default schema;
