import type { CollectionConfig, ImageUploadFormatOptions } from "payload";
const formatOptions: ImageUploadFormatOptions = {
  format: "webp",
  options: {
    quality: 80,
  },
};
export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: {
    formatOptions,
    imageSizes: [
      {
        name: "thumbnail",
        height: 400,
        formatOptions,
      },
      {
        name: "medium",
        height: 800,
        formatOptions,
      },
      {
        name: "large",
        height: 1200,
        formatOptions,
      },
    ],
  },
};
