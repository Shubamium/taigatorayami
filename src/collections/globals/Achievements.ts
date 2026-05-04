import { GlobalConfig } from "payload";

export const Achievements: GlobalConfig = {
  slug: "achievements",

  fields: [
    {
      name: "achievementList",
      type: "upload",
      relationTo: "media",

      hasMany: true,
      unique: false,
    },
    {
      name: "biography",
      type: "array",
      fields: [
        {
          name: "year",
          type: "text",
        },
        {
          name: "items",
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
          ],
        },
      ],
    },
  ],
};
