import { getRecentMockVId, getRecentVids } from "@/function/ytapi";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";
import VidCarousel from "./VidCarousel";

type Props = {};

export default async function RecentVideos({}: Props) {
  const t = await getTranslations("home");
  const env = process.env.NODE_ENV;
  let data = [];
  data =
    env === "production"
      ? await getRecentVids(process.env.YT_ID ?? "")
      : await getRecentMockVId(process.env.YT_ID ?? "");
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
