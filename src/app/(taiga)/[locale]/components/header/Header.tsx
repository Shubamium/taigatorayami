"use client";
import { useTranslations, useLocale } from "next-intl";
import { getPathname, usePathname, Link as IntlLink } from "@/i18n/navigation";
import "./header.scss";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

type Props = {};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Header({}: Props) {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();

  const [sideMenu, setSideMenu] = useState(false);
  return (
    <>
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
          <button
            className="btn btn-menu"
            onClick={() => {
              setSideMenu(!sideMenu);
            }}
          >
            <BiMenu />
          </button>
        </div>
      </header>
      <AnimatePresence mode="popLayout">
        {sideMenu && (
          <motion.aside
            id="sidemenu"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            key={"sidemenu"}
            transition={{
              duration: 0.4,
            }}
            onClick={() => {
              setSideMenu(false);
            }}
          >
            <div className="menu">
              <motion.nav
                className="c head-nav"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants as any}>
                  <IntlLink href={"/"} className={`btn btn-nav`}>
                    {t("home")}
                  </IntlLink>
                </motion.div>
                <motion.div variants={itemVariants as any}>
                  <IntlLink href={"/#about"} className={`btn btn-nav`}>
                    {t("about")}
                  </IntlLink>
                </motion.div>
                <motion.div variants={itemVariants as any}>
                  <IntlLink href={"/gallery"} className={`btn btn-nav`}>
                    {t("gallery")}
                  </IntlLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <IntlLink href={"/portfolio"} className={`btn btn-nav`}>
                    {t("portfolio")}
                  </IntlLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <IntlLink href={"#"} className={`btn btn-nav`}>
                    {t("merch")}
                  </IntlLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <IntlLink href={"/achievements"} className={`btn btn-nav`}>
                    {t("achievements")}
                  </IntlLink>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button className={`btn btn-nav`}> CLOSE </button>
                </motion.div>
              </motion.nav>
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
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
