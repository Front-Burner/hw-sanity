export default {
  title: 'Hero',
  type: 'object',
  name: 'hero',
  fields: [
    {
      title: 'Active?',
      name: 'active',
      type: 'boolean',
      description: 'Defaults to true. Set to false if you need to remove from page',
      initialValue: true
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'image-right',
      options: {
        list: [
          { title: 'Image Right', value: 'image-right' },
          { title: 'Image Left', value: 'image-left' },
        ],
      },
    },
  ],
  preview: {
    select: {
      layout: 'layout'
    },
    prepare(selection) {
      const {layout} = selection
      return {
        title: 'Hero',
        subtitle: `${layout}`
      }
    }
  }
}