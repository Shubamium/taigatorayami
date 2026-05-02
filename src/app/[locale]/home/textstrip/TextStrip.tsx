import React from "react";
import { useTranslations } from "next-intl";

type Props = {};

export default function TextStrip({}: Props) {
  const t = useTranslations("textstrip");

  return (
    <section id="text-strip">
      <div className="slide">
        <p>{t("bio")}</p>
        <p>{t("bio")}</p>
        <p>{t("bio")}</p>
      </div>
    </section>
  );
}
