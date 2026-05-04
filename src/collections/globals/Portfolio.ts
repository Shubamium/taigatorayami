import { GlobalConfig } from "payload";

export const Portfolio: GlobalConfig = {
  slug: "portfolio",

  fields: [
    {
      name: "majorRoles",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "minorRoles",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "demoReels",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "audioFile",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "portfolioContactArt",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "contactEmail",
      type: "text",
    },
  ],
};
