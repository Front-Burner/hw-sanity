export default {
  title: "Carousel Hero",
  type: "object",
  name: "carouselHero",
  fields: [
    {
      title: "Active?",
      name: "active",
      type: "boolean",
      description:
        "Defaults to true. Set to false if you need to remove from page",
      initialValue: true,
    },
    {
      title: "Content on the right side?",
      name: "position",
      type: "boolean",
      description: "Defaults to false",
      initialValue: false,
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "text",
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "defaultImage" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      active: "active",
      position: "position",
    },
    prepare(selection) {
      const { active, position } = selection;
      return {
        title: "Carousel Hero",
        subtitle: `${active ? "Active" : "Not Active"} - ${
          position ? "Content Right" : "Content Left"
        }`,
      };
    },
  },
};
