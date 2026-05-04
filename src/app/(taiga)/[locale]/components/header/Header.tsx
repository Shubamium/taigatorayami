"use client";
import Link from "next/link";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { getPathname, usePathname, Link as IntlLink } from "@/i18n/navigation";
import "./header.scss";

type Props = {};

export default function Header({}: Props) {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <header id="header">
      <img src="/d/header-mainart.png" alt="" className="mainart" />

      <div className="confine">
        <div className="l">
          <h1 className="logo">
            <IntlLink href="/">
              <img src="/p/wordmark.png" alt="" />
            </IntlLink>
          </h1>
        </div>
        <nav className="c head-nav">
          <IntlLink href={"/"} className={`btn btn-nav`}>
            {t("home")}
          </IntlLink>
          <IntlLink href={"/#about"} className={`btn btn-nav`}>
            {t("about")}
          </IntlLink>
          <IntlLink href={"/gallery"} className={`btn btn-nav`}>
            {t("gallery")}
          </IntlLink>
          <IntlLink href={"/portfolio"} className={`btn btn-nav`}>
            {t("portfolio")}
          </IntlLink>
          <IntlLink href={"#"} className={`btn btn-nav`}>
            {t("merch")}
          </IntlLink>
          <IntlLink href={"/achievements"} className={`btn btn-nav`}>
            {t("achievements")}
          </IntlLink>
        </nav>
        <div className="r langselector">
          <IntlLink
            href={pathname}
            locale="en"
            className={`btn btn-lang ${locale === "en" ? "active" : ""}`}
          >
            ENG
          </IntlLink>
          |
          <IntlLink
            href={pathname}
            locale="ja"
            className={`btn btn-lang ${locale === "ja" ? "active" : ""}`}
          >
            日本語
          </IntlLink>
          |
          <IntlLink
            href={pathname}
            locale="zh"
            className={`btn btn-lang ${locale === "zh" ? "active" : ""}`}
          >
            中文
          </IntlLink>
        </div>
      </div>
    </header>
  );
}
