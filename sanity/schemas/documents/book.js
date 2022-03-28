import { FaBook as icon } from 'react-icons/fa';

export default {
  title: 'Book',
  name: 'book',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Short Title',
      name: 'shortTitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Author (s)',
      name: 'author',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Overview',
      name: 'overview',

      type: 'blockContent',
    },
    {
      title: 'Where to Buy',
      name: 'whereToBuyUrl',
      type: 'url',
    },
    {
      title: 'Book Image',
      name: 'bookImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Tags',
      name: 'tag',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topic' }, { type: 'framework' }],
        },
      ],
    },
  ],
};
