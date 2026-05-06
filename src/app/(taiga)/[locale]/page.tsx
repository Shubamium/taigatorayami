import { CSSProperties } from "react";
import "./home.scss";
import { Link } from "@/i18n/navigation";
// import { useTranslations } from "next-intl";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import TextStrip from "./home/textstrip/TextStrip";
import { PiFilmSlate, PiFilmSlateFill } from "react-icons/pi";
import HeroSection from "./home/HeroSection";
import RecentVideos from "./home/recentVideos/RecentVideos";
import { FaXTwitter } from "react-icons/fa6";
import { TbLockHeart } from "react-icons/tb";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Media } from "@/payload-types";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const homeData = await payload.findGlobal({ slug: "home" });
  return (
    <main id="p_home">
      <HeroSection
        heroArt={
          typeof homeData.heroArt === "object"
            ? ((homeData.heroArt as Media)?.url ?? undefined)
            : undefined
        }
      />
      <TextStrip />
      <img src="/d/section-line.svg" alt="" className="sectionline" />
      <section id="about">
        <div className="centerline"></div>
        <div className="chains l"></div>
        <div className="chains r"></div>
        <div className="confine">
          <img src="/d/catchmelive.svg" alt="" className="bgtext" />
          <div className="art">
            <img src="/d/scratchcircle.png" alt="" className="circ" />
            <img src="/d/catchborder.png" alt="" className="catchborder" />
            <img src="/d/catcharrr.png" alt="" className="catcharr" />

            {/* About ARt */}
            {typeof homeData.aboutArt === "object" && (
              <img
                src={(homeData.aboutArt as Media)?.url ?? ""}
                alt=""
                className="aboutart"
              />
            )}
          </div>
          <div className="text">
            <div className="l"></div>
            <div className="r hero-content">
              <article>
                <div className="heading">
                  <h2 className="hlt">{t("catchMeLive")}</h2>
                  <p className="sht">{t("onTwitch")}</p>
                </div>
                <p className="desc">{t("streamDesc")}</p>
              </article>

              <div className="ctb">
                <div className="contact-list">
                  <Link
                    href={"https://youtube.com/@taigatorayami"}
                    target={"blank"}
                    className="btn btn-ct"
                  >
                    <FaYoutube className="icon" />
                  </Link>
                  <Link
                    href={"https://x.com/TaigaTorayami"}
                    target={"blank"}
                    className="btn btn-ct"
                  >
                    <FaXTwitter className="icon" />
                  </Link>
                  <Link
                    href={"https://twitch.tv/taigatorayami"}
                    target={"blank"}
                    className="btn btn-ct"
                  >
                    <FaTwitch className="icon" />
                  </Link>
                  <Link
                    href={"https://fansly.com/TaigaTorayami"}
                    target={"blank"}
                    className="btn btn-ct"
                  >
                    <TbLockHeart className="icon" />
                  </Link>
                </div>

                <div className="twitch-li">
                  <iframe
                    src={`https://player.twitch.tv/?&channel=taigatorayami&parent=${process.env.NEXT_PUBLIC_SITE_URL}`}
                    allowFullScreen
                    allow="encrypted-media *;"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecentVideos />
      <section id="cons">
        <img src="/d/conbg.png" alt="" className="bg" />
        <div className="meetgreetscroll"></div>
        <div className="confine">
          <img src="/d/coloredscratch.png" alt="" className="scratch tr" />
          <img src="/d/coloredscratch.png" alt="" className="scratch bl" />
          <div className="art">
            <img src="/g/conbgpanel.png" alt="" className="conbg" />
            <img
              src={(homeData.conventionArt as Media)?.url ?? undefined}
              alt=""
              className="mainart"
            />
          </div>
          <></>
          <div className="cons-list">
            <div className="heading-panel">
              <h2 className="hlt">{t("conventionTitle")}</h2>
              <p>{t("conventionDesc")}</p>
            </div>

            <div className="concontent">
              <div className="line">
                <img src="/d/conline.svg" alt="" />
              </div>
              <div className="list">
                {homeData.conventionSchedules &&
                homeData.conventionSchedules.length > 0 ? (
                  homeData.conventionSchedules.map((schedule, index) => (
                    <div key={index} className="con">
                      {typeof schedule.image === "object" && (
                        <img
                          src={(schedule.image as Media)?.url ?? undefined}
                          alt={schedule.image?.alt || ""}
                          className="img"
                        />
                      )}
                      <img src="/d/conpin.png" alt="" className="pin" />
                      <h2 className="sht">{schedule.name}</h2>
                      <p className="sht">{schedule.date}</p>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="con">
                      <img src="/g/conplaceholder.png" alt="" className="img" />
                      <img src="/d/conpin.png" alt="" className="pin" />
                      <h2 className="sht">TBA</h2>
                      <p className="sht">December 12-14 2025</p>
                    </div>

                    <div className="con">
                      <img src="/g/conplaceholder.png" alt="" className="img" />
                      <img src="/d/conpin.png" alt="" className="pin" />
                      <h2 className="sht">TBA</h2>
                      <p className="sht">December 12-14 2025</p>
                    </div>

                    <div className="con">
                      <img src="/g/conplaceholder.png" alt="" className="img" />
                      <img src="/d/conpin.png" alt="" className="pin" />
                      <h2 className="sht">TBA</h2>
                      <p className="sht">December 12-14 2025</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="chains tb"></div>
        <div className="chains t"></div>
      </section>
    </main>
  );
}

// function WavyBorder({ id }: { id: string }) {
//   return (
//     <svg
//       width="50"
//       height="50"
//       viewBox="0 0 50 50"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="border"
//     >
//       <g filter={`url(#${id})`}>
//         <rect
//           x="46.5996"
//           y="2.6001"
//           width="44"
//           height="44"
//           transform="rotate(90 46.5996 2.6001)"
//           stroke="currentColor"
//           strokeWidth="2"
//         />
//       </g>
//       <defs>
//         <filter
//           id={id}
//           x="-0.000390649"
//           y="9.76324e-05"
//           width="49.2"
//           height="49.2"
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB"
//         >
//           <feFlood floodOpacity="0" result="BackgroundImageFix" />
//           <feBlend
//             mode="normal"
//             in="SourceGraphic"
//             in2="BackgroundImageFix"
//             result="shape"
//           />
//           {/* <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.10204081237316132 0.10204081237316132"
//             numOctaves="100"
//             seed="1660"
//           /> */}
//           <feDisplacementMap
//             in="shape"
//             scale="3.2000000476837158"
//             xChannelSelector="R"
//             yChannelSelector="G"
//             result="displacedImage"
//             width="100%"
//             height="100%"
//           />
//           <feMerge result="effect1_texture_254_145">
//             <feMergeNode in="displacedImage" />
//           </feMerge>
//         </filter>
//       </defs>
//     </svg>
//   );
// }
