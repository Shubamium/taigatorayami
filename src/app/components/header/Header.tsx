import Link from "next/link";
import React from "react";
import "./header.scss";

type Props = {};

export default function Header({}: Props) {
  return (
    <header id="header">
      <img src="/d/header-mainart.png" alt="" className="mainart" />

      <div className="confine">
        <div className="l">
          <h1 className="logo">
            <Link href="/">
              <img src="/p/wordmark.png" alt="" />
            </Link>
          </h1>
        </div>
        <nav className="c head-nav">
          <Link href={"/"} className={`btn btn-nav`}>
            Home
          </Link>
          <Link href={"/#about"} className={`btn btn-nav`}>
            About
          </Link>
          <Link href={"/gallery"} className={`btn btn-nav`}>
            GALLERY
          </Link>
          <Link href={"/portfolio"} className={`btn btn-nav`}>
            PORTFOLIO
          </Link>
          <Link href={"#"} className={`btn btn-nav`}>
            MERCH
          </Link>
          <Link href={"/achievements"} className={`btn btn-nav`}>
            ACHIEVEMENTS
          </Link>
        </nav>
        <div className="r langselector">
          <button className="btn btn-lang active">ENG</button>|
          <button className="btn btn-lang ">日本語</button>|
          <button className="btn btn-lang ">中文</button>
        </div>
      </div>
    </header>
  );
}
