import { FaRegNewspaper as icon } from 'react-icons/fa';

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',

      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',

      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: { type: 'person' },
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: 'mainImage',
    },
    {
      title: 'Categories',
      name: 'category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'topic' } }],
    },
    {
      title: 'Published at',
      name: 'publishedAt',

      type: 'datetime',
    },
    {
      title: 'Body',
      name: 'body',

      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;

      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
