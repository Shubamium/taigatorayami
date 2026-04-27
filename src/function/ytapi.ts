"use server";

import { youtube } from "@googleapis/youtube";
import { cacheLife } from "next/cache";
// Expected Result is list of recent video id given a channel id
export async function getRecentVids(channelId: string) {
  "use cache";
  cacheLife({
    revalidate: 3600 * 24 * 4,
  });
  const yt = youtube({
    version: "v3",
    auth: process.env.YTAPI,
  });

  const vidData = await yt.search.list({
    part: ["snippet"],
    channelId: channelId,
    maxResults: 10,
    order: "date",
  });
  const data = vidData.data;
  // console.log(data.items);
  // data.items?.forEach((d: any) => {
  //   console.log(d.thumbnails);
  // });

  const vidIds = data.items?.map((item: any) => item.id.videoId);
  const titleList = data.items?.map((item: any) => item.snippet.title);
  return [vidIds, titleList];
}
