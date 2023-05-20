import { BsFillPersonFill as icon } from 'react-icons/bs'

export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
      options: {
        list: [
          { title: 'Team', value: 'team' },
          { title: 'Expert', value: 'expert' },
          { title: 'Subscriber', value: 'subscriber' },
          { title: 'Client', value: 'client' }
        ]
      }
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
