"use client";
import { useMotionValue, useScroll, useTransform } from "motion/react";

import Link from "next/link";
import React, { CSSProperties, useRef } from "react";
import { FaTwitch, FaYoutube } from "react-icons/fa";

type Props = {
  heroArt?: string;
};
import { motion } from "motion/react";
import { FaXTwitter } from "react-icons/fa6";
import { TbLockHeart } from "react-icons/tb";
export default function HeroSection({ heroArt = "/g/heroart.png" }: Props) {
  const heroRef = useRef(null);
  const scroll = useScroll({
    target: heroRef,
  });
  const pushTransform = useTransform(scroll.scrollY, [0, 1080], [0, 300]);
  return (
    <section id="hero" ref={heroRef}>
      <div className="tdr t"></div>
      <div className="tdr b"></div>
      <div className="background">
        <div className="banner"></div>
        <div className="textside">
          <div className="verticalslide"></div>
          <div className="chains"></div>
        </div>
      </div>
      <div className="shadow"></div>

      <div className="content confine">
        <div className="sideline">
          <hr />
          <div className="arr">
            <div className="a"></div>
            <div className="a"></div>
            <div className="a"></div>
            <div className="a"></div>
          </div>
          <hr />
        </div>
        <div className="art">
          {/* Hero Section Art */}
          <motion.img
            style={{
              y: pushTransform,
            }}
            src={heroArt}
            alt=""
            className="heroart"
          />
        </div>
        <div className="cta">
          <div className="subtitle">
            <p>TAIGA TORAYAMI</p>
            <hr />
          </div>
          <div
            className="ctatext-container"
            style={
              {
                "--overlay": `url("/p/ctatext_en.png")`,
                "--red": `red`,
              } as CSSProperties
            }
          >
            <img
              src="/d/ctatext-slashoverlay.png"
              alt=""
              className="ctaslash"
            />
            <img src="/p/ctatext_en.png" alt="" className="ctatext" />
          </div>
        </div>
        <div className="sideleft">
          <div className="arrow-list">
            <div className="arr"></div>
            <div className="arr"></div>
            <div className="arr"></div>
            <div className="arr"></div>
            <div className="arr"></div>
          </div>
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
    </section>
  );
}
