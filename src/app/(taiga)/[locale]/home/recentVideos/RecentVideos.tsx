import { getRecentMockVId, getRecentVids } from "@/function/ytapi";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";
import VidCarousel from "./VidCarousel";
import { unstable_cache } from "next/cache";

type Props = {};
const getCahedRecentVids = unstable_cache(
  async (channelId: string) => getRecentVids(channelId),
  ["video"],
  {
    revalidate: 3600 * 24,
  },
);
export default async function RecentVideos({}: Props) {
  const t = await getTranslations("home");
  const env = process.env.NODE_ENV;

  let data =
    env == "production"
      ? await getCahedRecentVids(process.env.YT_ID ?? "")
      : await getRecentMockVId();
  // let data = await getCahedRecentVids(process.env.YT_ID ?? "");
  return (
    <section id="recent-videos">
      <img src="/d/videostroke.png" alt="" className="bgstroke" />
      <div className="max-confine">
        <div className="special-heading">
          <img src="/d/claw_dark.svg" alt="" className="claw l" />
          <img src="/d/claw_light.svg" alt="" className="claw r" />
          <h2 className="hlt">{t("recentVideosTitle")}</h2>
          <p className="sht">{t("recentVideosSubtitle")}</p>
          <hr />
        </div>

        <VidCarousel data={data} />

        <div className="externals">
          <Link href={"https://youtube.com"} className="btn btn-ct">
            <FaYoutube className="icon" />
            <p>{t("mainChannel")}</p>
            <img src="/d/texture-border.png" alt="" className="border" />
          </Link>
          <Link href={"https://youtube.com"} className="btn btn-ct grey">
            <PiFilmSlateFill className="icon" />
            <p>{t("vsekaiChannel")}</p>
            <img src="/d/texture-border.png" alt="" className="border" />
          </Link>
        </div>
      </div>
      <div className="chains l "></div>
      <div className="chains r"></div>
    </section>
  );
}
