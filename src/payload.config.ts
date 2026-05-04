import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

import { s3Storage } from "@payloadcms/storage-s3";
import { Home } from "./collections/globals/Home";
import { Portfolio } from "./collections/globals/Portfolio";
import { Gallery } from "./collections/globals/Gallery";
import { Achievements } from "./collections/globals/Achievements";
import { Contact } from "./collections/globals/Contact";
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  globals: [Home, Portfolio, Gallery, Achievements, Contact],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [
    s3Storage({
      bucket: "taiga-torayami",
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      config: {
        region: "us-east-1",
        endpoint: "https://minio-api.venmiart.com",
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.MINIOA ?? "",
          secretAccessKey: process.env.MINIOK ?? "",
        },
      },
    }),
  ],
});
