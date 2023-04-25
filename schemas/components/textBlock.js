export default {
  title: 'Text Block',
  type: 'object',
  name: 'textBlock',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare(selection) {
      const {text} = selection
      return {
        title: 'Text Block',
        subtitle: `${text[0].children[0].text}`
      }
    }
  }
}