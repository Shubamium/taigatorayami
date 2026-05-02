type Props = {};
import { useTranslations } from "next-intl";
import "./gallery.scss";
import { FaPalette } from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";
export default function page({}: Props) {
  const t = useTranslations("gallery");
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
              <p className="desc">
                (Placeholder Text ) General About text here I stream on twitch
                every Thursday - Sunday from 4PM - 7PM EST!{" "}
              </p>

              <div className="ig">
                <h2 className="hlt">{t("details")}</h2>
                <div className="il">
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
              <img src="/g/refsheetph.png" alt="" />
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
      </section>
    </main>
  );
}
