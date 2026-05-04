import React from "react";

type Props = {};

import "./portfolio.scss";
import { FaDownload, FaPlay } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { RiMailFill } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { getTranslations } from "next-intl/server";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Media } from "@/payload-types";
import DemoReelPlayer from "./DemoReelPlayer";
import { Link } from "@/i18n/navigation";

export default async function Portfolio({}: Props) {
  const t = await getTranslations("portfolio");
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const portfolioData = await payload.findGlobal({ slug: "portfolio" });
  return (
    <main
      id="p_portfolio"
      style={{
        display: "block",
      }}
    >
      <section id="reel-heading">
        <h2 className="styled">
          <img src="/d/claw_light.svg" alt="" className="claw" />
          {t("demoReel")}
        </h2>
        <p>
          {t("checkOutAll")}{" "}
          <Link className="sub act" href={"/portfolio"}>
            {t("demoReels")}
          </Link>{" "}
          {t("and")}{" "}
          <Link href={"/portfolio/roles"} className="sub">
            {t("roles")}!
          </Link>
        </p>
      </section>
      <section id="voice-list">
        {/* Demo Reels */}
        {portfolioData.demoReels && portfolioData.demoReels.length > 0 ? (
          portfolioData.demoReels.map((reel, index) => {
            const audioUrl =
              typeof reel.audioFile === "object"
                ? (reel.audioFile as Media).url
                : reel.audioFile;
            return (
              <DemoReelPlayer
                key={index}
                name={reel.name ?? ""}
                audioUrl={audioUrl ?? "/empty.mp3"}
              />
            );
          })
        ) : (
          <>
            <div className="voice">
              <h2 className="hlt">High Range</h2>
              <img src="/d/cd.svg" alt="" className="cd" />
              <div className="action">
                <button className="btn btn-audio">
                  <FaPlay />
                </button>
                <button className="btn btn-audio">
                  <FiDownloadCloud />
                </button>
                <input type="range" min={0} max={100} />
                <p className="dur">1:24</p>
              </div>
            </div>
            <div className="voice">
              <h2 className="hlt">High Range</h2>
              <img src="/d/cd.svg" alt="" className="cd" />
              <div className="action">
                <button className="btn btn-audio">
                  <FaPlay />
                </button>
                <button className="btn btn-audio">
                  <FiDownloadCloud />
                </button>
                <input type="range" min={0} max={100} />
                <p className="dur">1:24</p>
              </div>
            </div>
            <div className="voice">
              <h2 className="hlt">High Range</h2>
              <img src="/d/cd.svg" alt="" className="cd" />
              <div className="action">
                <button className="btn btn-audio">
                  <FaPlay />
                </button>
                <button className="btn btn-audio">
                  <FiDownloadCloud />
                </button>
                <input type="range" min={0} max={100} />
                <p className="dur">1:24</p>
              </div>
            </div>
          </>
        )}
      </section>
      <div id="showlist">
        <div className="confine">
          <div className="side">
            <hr />
            <div className="arr">
              <div className="a"></div>
              <div className="a"></div>
              <div className="a"></div>
              <div className="a"></div>
            </div>
            <hr />
          </div>
          <img src="/g/comingsoon.svg" alt="" className="cms" />
          <div className="side r">
            <hr />
            <div className="arr">
              <div className="a"></div>
              <div className="a"></div>
              <div className="a"></div>
              <div className="a"></div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <section id="business-contact">
        <div className="tigerskin"></div>
        <div className="confine">
          <img src="/p/contactme.png" alt="" className="bgtext" />
          <div className="l">
            <div className="heading">
              <h2 className="hlt">{t("contact")}</h2>
              <p>{t("inquiry")}</p>
            </div>

            <div className="action">
              <a
                href={`mailto:${portfolioData.contactEmail || "tomboyified@outlook.com"}`}
                className="btn btn-mail"
              >
                <img src="/d/texture-borderw.png" alt="" className="border" />
                <RiMailFill />

                {/* Ct Mail */}
                <span>
                  {portfolioData.contactEmail || "tomboyified@outlook.com"}
                </span>
              </a>
              <button className="btn btn-contact">
                <img src="/d/texture-border_r.png" alt="" className="border" />
                <span>{t("contactForm")}</span> <FaPenToSquare />
              </button>
            </div>
          </div>
          <div className="r">
            {/* Portfolio Contact Art */}
            {typeof portfolioData.portfolioContactArt === "object" ? (
              <img
                src={
                  (portfolioData.portfolioContactArt as Media)?.url ?? undefined
                }
                alt=""
                className="ctart"
              />
            ) : (
              <img src="/g/heroart.png" alt="" className="ctart" />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
