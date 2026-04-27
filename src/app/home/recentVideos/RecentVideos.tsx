import { getRecentVids } from "@/function/ytapi";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";
import VidCarousel from "./VidCarousel";

type Props = {};

export default async function RecentVideos({}: Props) {
  const data = await getRecentVids(process.env.YT_ID ?? "");
  return (
    <section id="recent-videos">
      <img src="/d/videostroke.png" alt="" className="bgstroke" />
      <div className="max-confine">
        <div className="special-heading">
          <img src="/d/claw_dark.svg" alt="" className="claw l" />
          <img src="/d/claw_light.svg" alt="" className="claw r" />
          <h2 className="hlt">Check out my recent videos</h2>
          <p className="sht">youtube videos!</p>
          <hr />
        </div>

        <VidCarousel data={data} />

        <div className="externals">
          <Link href={"https://youtube.com"} className="btn btn-ct">
            <FaYoutube className="icon" />
            <p>MAIN CHANNEL</p>
            <img src="/d/texture-border.png" alt="" className="border" />
          </Link>
          <Link href={"https://youtube.com"} className="btn btn-ct grey">
            <PiFilmSlateFill className="icon" />
            <p>VSEKAI CHANNEL</p>
            <img src="/d/texture-border.png" alt="" className="border" />
          </Link>
        </div>
      </div>
      <div className="chains l "></div>
      <div className="chains r"></div>
    </section>
  );
}
