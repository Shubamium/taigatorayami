"use client";

type Props = {};

import "./footer.scss";
import { BiArrowToTop } from "react-icons/bi";
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FaXTwitter } from "react-icons/fa6";
import { TbLockHeart } from "react-icons/tb";

export default function Footer({}: Props) {
  const t = useTranslations("navigation");
  const ft = useTranslations("footer");
  return (
    <footer id="footer">
      <svg
        width="141"
        height="155"
        viewBox="0 0 141 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="claw l"
      >
        <path
          d="M113.912 116.008C112.486 96.9545 131.519 87.1685 140.97 84.4141C82.7713 72.6188 71.7861 117.467 74.0544 154.084C77.6838 132.049 101.976 119.357 113.912 116.008Z"
          fill="url(#paint0_linear_84_305)"
        />
        <path
          d="M80.805 86.3136C82.1685 67.2551 102.423 60.3442 112.174 58.9951C56.313 38.8525 38.9156 81.6233 35.8287 118.181C42.6274 96.9087 68.509 87.8887 80.805 86.3136Z"
          fill="url(#paint1_linear_84_305)"
        />
        <path
          d="M53.7922 49.0926C62.0844 31.8785 83.4599 32.9197 93.0222 35.26C48.5183 -4.05437 16.5809 29.2925 0.236713 62.1381C14.3974 44.8698 41.7814 46.0246 53.7922 49.0926Z"
          fill="url(#paint2_linear_84_305)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_84_305"
            x1="140.97"
            y1="118.288"
            x2="73.7817"
            y2="118.288"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#666666" />
            <stop offset="0.610634" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_84_305"
            x1="107.243"
            y1="92.5077"
            x2="40.7704"
            y2="82.7259"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#666666" />
            <stop offset="0.610634" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_84_305"
            x1="76.0854"
            y1="64.5953"
            x2="17.8987"
            y2="31.0012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#666666" />
            <stop offset="0.610634" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="141"
        height="155"
        viewBox="0 0 141 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="claw r"
      >
        <path
          d="M113.912 116.008C112.486 96.9545 131.519 87.1685 140.97 84.4141C82.7713 72.6188 71.7861 117.467 74.0544 154.084C77.6838 132.049 101.976 119.357 113.912 116.008Z"
          fill="url(#oakwodkaowdkoakdo)"
        />
        <path
          d="M80.805 86.3136C82.1685 67.2551 102.423 60.3442 112.174 58.9951C56.313 38.8525 38.9156 81.6233 35.8287 118.181C42.6274 96.9087 68.509 87.8887 80.805 86.3136Z"
          fill="url(#awdoawjdoajo)"
        />
        <path
          d="M53.7922 49.0926C62.0844 31.8785 83.4599 32.9197 93.0222 35.26C48.5183 -4.05437 16.5809 29.2925 0.236713 62.1381C14.3974 44.8698 41.7814 46.0246 53.7922 49.0926Z"
          fill="url(#ojawodjawojdoaj)"
        />
        <defs>
          <linearGradient
            id="oakwodkaowdkoakdo"
            x1="140.97"
            y1="118.288"
            x2="73.7817"
            y2="118.288"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#666666" />
            <stop offset="0.610634" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
          <linearGradient
            id="awdoawjdoajo"
            x1="107.243"
            y1="92.5077"
            x2="40.7704"
            y2="82.7259"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#666666" />
            <stop offset="0.610634" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
          <linearGradient
            id="ojawodjawojdoaj"
            x1="76.0854"
            y1="64.5953"
            x2="17.8987"
            y2="31.0012"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#666666" />
            <stop offset="0.610634" stopColor="#CCCCCC" />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>
      <div className="confine">
        <div className="l">
          <div className="nav">
            <img src="/d/coloredscratch.png" alt="" className="scratch" />
            <h2 className="sht"> {ft("navigation")}</h2>

            <div className="links">
              <Link href={"/"} className={`btn btn-footnav`}>
                {t("home")}
              </Link>
              <Link href={"/#about"} className={`btn btn-footnav`}>
                {t("about")}
              </Link>
              <Link href={"/gallery"} className={`btn btn-footnav`}>
                {t("gallery")}
              </Link>
              <Link href={"/portfolio"} className={`btn btn-footnav`}>
                {t("portfolio")}
              </Link>
              <Link href={"#"} className={`btn btn-footnav`}>
                {t("merch")}
              </Link>
              <Link href={"/achievements"} className={`btn btn-footnav`}>
                {t("achievements")}
              </Link>
              <Link
                href="/contacts"
                className="btn  btn-footnav"
                onClick={(e) => {
                  e.preventDefault();
                  const ctopenevent = new CustomEvent("ctform");
                  window.dispatchEvent(ctopenevent);
                }}
              >
                {t("contacts")}
              </Link>
            </div>
          </div>
          <div className="attrib">
            <div className="arr">
              <div className="a"></div>
              <div className="a"></div>
              <div className="a"></div>
              <div className="a"></div>
            </div>
            <p>
              <span className="t">Taiga Torayami</span>{" "}
              <span className="copy">{ft("rights")}</span>
            </p>
            <p className="creds">
              {ft("designBy")}
              <a href="https://x.com/shubamium2">SHUBAMIUM</a>
            </p>
          </div>
        </div>
        <div className="r">
          <img src="/d/footershad.png" alt="" className="shad" />

          <button className="btn btn-top">
            <BiArrowToTop /> {ft("scrollTop")}
            <img src="/d/texture-borderw.png" alt="" />
          </button>
          <div className="ct">
            {/* <div className="social-contac"></div> */}
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
          </div>
        </div>
      </div>
    </footer>
  );
}
