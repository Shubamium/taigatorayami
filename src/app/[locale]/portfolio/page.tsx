import React from "react";

type Props = {};

import "./portfolio.scss";
import Link from "next/link";
import { FaDownload, FaPlay } from "react-icons/fa";
import { FiDownloadCloud } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { RiMailFill } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { useTranslations } from "next-intl";
export default function Portfolio({}: Props) {
  const t = useTranslations("portfolio");
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
              <a href="mailto:tomboyified@outlook.com" className="btn btn-mail">
                <img src="/d/texture-borderw.png" alt="" className="border" />
                <RiMailFill />
                <span>tomboyified@outlook.com</span>
              </a>
              <button className="btn btn-contact">
                <img src="/d/texture-border_r.png" alt="" className="border" />
                <span>{t("contactForm")}</span> <FaPenToSquare />
              </button>
            </div>
          </div>
          <div className="r">
            <img src="/g/heroart.png" alt="" className="ctart" />
          </div>
        </div>
      </section>
    </main>
  );
}
