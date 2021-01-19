export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "string",
      options: {
        minLength: 50,
      },
    },
  ],
};
