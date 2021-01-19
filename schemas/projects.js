export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featuredImage",
      title: "FeaturedImage",
      type: "string",
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
