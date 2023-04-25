import { object } from "prop-types";

export default {
  title: "Menu",
  name: 'menu',
  type: "document",
  groups: [
    {
      name: 'switches',
      title: 'Switches',
    },
    {
      name: 'info',
      title: 'Menu Information',
    },
    {
      name: 'locations',
      title: 'Locations',
    },
    {
      name: 'editLocation',
      title: 'Edit By Location',
    },
  ],
  fields: [
    {
      title: 'Active?',
      name: 'active',
      type: 'boolean',
      description: 'Defaults to true. Set to false if you need to remove from menu',
      group: 'switches',
      initialValue: true
    },
    {
      title: "Title",
      description: "The name of this item",
      name: "title",
      type: "string",
      group: 'info',
      validation: Rule => Rule.required()
    },
    {
      title: "Price",
      description: "The price of this item",
      name: "price",
      type: "string",
      group: 'info',
    },
    {
      title: 'Dates',
      name: 'dates',
      hidden: false, // Default value
      type: 'object',
      group: 'info',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2 // Defines a grid for the fields and how many columns it should have
      },
      fields: [
        {
          name: 'firstDay',
          type: 'date',
          title: 'First Day',
          description: 'This can be used to schedule post for publishing',
          initialValue: '2022-01-01',
        },
        {
          name: 'lastDay',
          type: 'date',
          title: 'Last Day',
          description: 'This can be used to schedule post for publishing',
        },
      ]
    },
    {
      name: 'categories',
      type: 'reference',
      title: 'Category',
      group: 'info',
      to: {
        type: 'category',
      },
    },
    { title: 'Description',
      name: 'description',
      group: 'info',
      type: 'text'
    },
    { 
      title: 'Locations',
      name: 'locations',
      type: 'array',
      group: 'locations',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'location'},
          ]
        }
      ]
    },
    {
      title: 'Edit By Location',
      name: 'editByLocation',
      group: 'editLocation',
      type: 'array',
      of: [
        {
          title: 'Edit Location',
          type: 'object',
          fields: [
            { 
              title: 'Location',
              name: 'location',
              type: 'reference',
              to: [
                {type: 'location'},
              ]
            },
            {
              title: 'Active?',
              name: 'active',
              type: 'boolean',
              description: 'Defaults to true. Set to false if you need to remove from menu',
              initialValue: true
            },
            {
              title: "Title",
              description: "The name of this item",
              name: "title",
              type: "string",
            },
            {
              title: "Price",
              description: "The price of this item",
              name: "price",
              type: "string"
            },
            {
              title: 'Dates',
              name: 'dates',
              hidden: false, // Default value
              type: 'object',
              options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false, // Defines if the fieldset should be collapsed by default or not
                columns: 2 // Defines a grid for the fields and how many columns it should have
              },
              fields: [
                {
                  name: 'firstDay',
                  type: 'date',
                  title: 'First Day',
                  description: 'This can be used to schedule post for publishing',
                  initialValue: '2022-01-01',
                },
                {
                  name: 'lastDay',
                  type: 'date',
                  title: 'Last Day',
                  description: 'This can be used to schedule post for publishing',
                },
              ]
            },
            {
              name: 'categories',
              type: 'reference',
              title: 'Category',
              to: {
                type: 'category',
              },
            },
            { title: 'Description',
              name: 'description',
              type: 'text'
            },
          ]
        }
      ]
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}