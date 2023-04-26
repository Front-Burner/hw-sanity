export default {
  name: "starterCategory",
  title: "Starter Category",
  type: "document",
  fields: [
    // ... other fields ...
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
