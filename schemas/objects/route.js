export default {
  title: 'Route',
  name: 'route',
  type: 'object',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    { 
      title: 'Page',
      name: 'pageRoute',
      type: 'reference',
      to: [
        {type: 'basicPage'},
        {type: 'page'},
        {type: 'contactPage'},
      ]
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string'
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link'
    },
    {
      title: 'Kind',
      name: 'kind',
      type: 'string',
      initialValue: 'link',
      options: {
        layout: 'radio',
        list: ['button', 'link']
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      pageRoute: 'pageRoute.slug.current',
      route: 'route',
      link: 'link'
    },
    prepare ({title, pageRoute, route, link}) {
      let subtitle = 'Not set'
      if (pageRoute) {
        subtitle = `Route: /${pageRoute}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle
      }
    }
  }
}