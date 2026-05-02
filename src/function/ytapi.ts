"use server";

import { youtube } from "@googleapis/youtube";
import { cacheLife } from "next/cache";

// Expected Result is list of recent video id given a channel id
export async function getRecentVids(channelId: string) {
  "use cache";
  cacheLife("days");
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
export async function getRecentMockVId(channelId: string) {
  const ytVidIds = [
    "dZ6JyD0ZK4A",
    "V4j7EiHm0m4",
    "jHbUeN2g3Y0",
    "4Vw2E7PnRyA",
    "BbX6yT4n9D8",
    "U4lCt8KQ0Ug",
    "hKQ2a0u7rKc",
    "RqHs5cWY5j4",
    "m9pBZxwL3Hg",
    "m9pBZxwL3Hg",
  ];
  const titleList = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
    "test9",
    "test10",
  ];

  return [ytVidIds, titleList];
}
