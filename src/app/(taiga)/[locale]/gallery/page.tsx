type Props = {};
import "./gallery.scss";
import { FaPalette } from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";
import { getTranslations } from "next-intl/server";
import { getPayload } from "payload";
import config from "@/payload.config";
import { Media } from "@/payload-types";
import IllustrationsCarousel from "./IllustrationsCarousel";

export default async function page({}: Props) {
  const t = await getTranslations("gallery");
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const galleryData = await payload.findGlobal({ slug: "gallery" });

  return (
    <main id="p_gallery">
      <section id="main">
        <div className="heading">
          <div className="confine">
            <hr />
            <img src="/p/gallerytext.png" alt="" className="bgtext" />
            <h2 className="styled">{t("gallery")}</h2>
            <hr />
          </div>
        </div>

        <div className="gallerycontainer">
          <div className="confine">
            <div className="details">
              <img src="/d/claw_light.svg" alt="" className="claw" />
              <h2 className="hlt">{t("about")}</h2>
              {/* About */}
              <p className="desc">
                (Placeholder Text ) General About text here I stream on twitch
                every Thursday - Sunday from 4PM - 7PM EST!{" "}
              </p>

              <div className="ig">
                <h2 className="hlt">{t("details")}</h2>
                {/* Detauks */}
                <div className="il">
                  {galleryData.details && galleryData.details.length > 0 ? (
                    galleryData.details.map((detail, index) => (
                      <div key={index} className="info">
                        <h3>{detail.name}</h3>
                        <p>{detail.value}</p>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="info">
                        <h3>Species</h3>
                        <p>Siberian tiger</p>
                      </div>
                      <div className="info">
                        <h3>Height</h3>
                        <p>5'4 (162.56 cm)</p>
                      </div>

                      <div className="info">
                        <h3>Weight</h3>
                        <p>370 lbs (167 kg)</p>
                      </div>

                      <div className="info">
                        <h3>Bust Size</h3>
                        <p>F Cup</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="ig">
                <h2 className="hlt">{t("artTags")}</h2>
                <div className="il">
                  <a
                    href="https://x.com/hashtag/TomboyInk"
                    className="info icon"
                  >
                    <FaPalette />
                    <p>#TomboyInk</p>
                  </a>
                  <a
                    href="https://x.com/hashtag/StripeClub"
                    className="info icon"
                  >
                    <TbRating18Plus />
                    <p>#StripeClub</p>
                  </a>
                </div>
              </div>
              <div className="ig">
                <h2 className="hlt">{t("credits")}</h2>
                <div className="il">
                  <a
                    href="https://x.com/cluseller/"
                    target="_blank"
                    className="info"
                  >
                    <h3>Art</h3>
                    <p>@Cluseller</p>
                  </a>
                  <a
                    href="https://x.com/KoumoriVa"
                    target="_blank"
                    className="info"
                  >
                    <h3>Rigging</h3>
                    <p>@KoumoriVA</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="sheets">
              {/* Reference Sheet */}
              {typeof galleryData.referenceSheet === "object" ? (
                <img
                  src={(galleryData.referenceSheet as Media)?.url ?? undefined}
                  alt="Reference Sheet"
                />
              ) : (
                <img src="/g/refsheetph.png" alt="" />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="illustrations">
        <div className="heading">
          <h2 className="hlt">{t("officialIllustrations")}</h2>
          <img src="/p/officialillustrations.png" alt="" className="bgtext" />
          <p>
            (Placeholder Text ) I stream on twitch every Thursday - Sunday from
            4PM - 7PM EST!{" "}
          </p>
        </div>

        {galleryData.officialIllustrations &&
        galleryData.officialIllustrations.length > 0 ? (
          <IllustrationsCarousel
            illustrations={galleryData.officialIllustrations as any}
          />
        ) : (
          <div className="artcarousel confine">
            <div className="artc">
              <a href="#" className="title">
                <p>
                  Author: <span>ARTIST NAME</span>
                </p>
              </a>
              <img src="/g/refsheetph.png" alt="" />
            </div>
            <div className="artc">
              <a href="#" className="title">
                <p>
                  Author: <span>ARTIST NAME</span>
                </p>
              </a>
              <img src="/g/refsheetph.png" alt="" />
            </div>
            <div className="artc">
              <a href="#" className="title">
                <p>
                  Author: <span>ARTIST NAME</span>
                </p>
              </a>
              <img src="/g/refsheetph.png" alt="" />
            </div>
            <div className="artc">
              <a href="#" className="title">
                <p>
                  Author: <span>ARTIST NAME</span>
                </p>
              </a>
              <img src="/g/refsheetph.png" alt="" />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
