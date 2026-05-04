import { GlobalConfig } from "payload";

export const Home: GlobalConfig = {
  slug: "home",
  fields: [
    {
      name: "heroArt",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "aboutArt",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "conventionArt",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "conventionSchedules",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "date",
          type: "text",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
