import { FaShareAlt as icon } from 'react-icons/fa';

export default {
  title: 'Platform',
  name: 'platform',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().min(8).max(80),
    },

    // add a unique slug field for queries, permalinks etc
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        // auto generates a slug from the title field
        source: 'name',
        auto: true,
      },
    },
    {
      title: 'Platform Image',
      name: 'platformImage',
      type: 'image',
    },
    {
      title: 'Platform Link',
      name: 'platformUrl',
      type: 'url',
    },
    {
      title: 'Social Media',
      name: 'isSocialMedia',
      type: 'boolean',
    },
  ],
};
