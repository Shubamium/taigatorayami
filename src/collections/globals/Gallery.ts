import { GlobalConfig } from "payload";

export const Gallery: GlobalConfig = {
  slug: "gallery",
  fields: [
    {
      name: "about",
      type: "richText",
    },
    {
      name: "details",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "value",
          type: "text",
        },
      ],
    },
    {
      name: "referenceSheet",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "officialIllustrations",
      type: "array",
      fields: [
        {
          name: "illustration",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "author",
          type: "text",
        },
        {
          name: "authorLink",
          type: "text",
        },
      ],
    },
  ],
};
