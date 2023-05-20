import { FaTrademark as icon } from 'react-icons/fa';

export default {
  title: 'Brand',
  name: 'brand',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
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
      title: 'Brand Icon',
      name: 'brandIcon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
