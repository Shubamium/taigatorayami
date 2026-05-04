"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";

type Props = {
  biography: Array<{
    year: string;
    items: Array<{
      name: string;
      date: string;
    }>;
  }>;
};

export default function BiographyYearSwitcher({ biography }: Props) {
  const t = useTranslations("achievements");
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const selectedYear = biography[selectedYearIndex];

  return (
    <section id="biography">
      <div className="biohead">
        <a className="hlt">{t("biography")}</a>
        <img src="/d/trophy.png" alt="" className="trophydecor" />
        <div className="ctrl">
          {biography.map((bio, index) => (
            <button
              key={index}
              className={`btn btn-year ${index === selectedYearIndex ? "act" : ""}`}
              onClick={() => setSelectedYearIndex(index)}
            >
              <img src="/d/texture-borderyear.png" alt="" />
              {bio.year}
            </button>
          ))}
        </div>
      </div>
      <div className="list">
        <div className="line">
          <div className="l"></div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYearIndex}
            className="datelist"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedYear.items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 100,
                  transition: {
                    delay: 0,
                  },
                }}
                transition={{
                  delay: index * 0.2,
                }}
                key={index}
                className="date"
              >
                <p className="d">{item.date}</p>
                <p className="name">{item.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
