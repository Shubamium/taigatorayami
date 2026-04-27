type Props = {};
import "./gallery.scss";
import { FaPalette } from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";
export default function page({}: Props) {
  return (
    <main id="p_gallery">
      <section id="main">
        <div className="heading">
          <div className="confine">
            <hr />
            <img src="/p/gallerytext.png" alt="" className="bgtext" />
            <h2 className="styled">GALLERY</h2>
            <hr />
          </div>
        </div>

        <div className="gallerycontainer">
          <div className="confine">
            <div className="details">
              <img src="/d/claw_light.svg" alt="" className="claw" />
              <h2 className="hlt">About</h2>
              <p className="desc">
                (Placeholder Text ) General About text here I stream on twitch
                every Thursday - Sunday from 4PM - 7PM EST!{" "}
              </p>

              <div className="ig">
                <h2 className="hlt">Details</h2>
                <div className="il">
                  <div className="info">
                    <h3>Species</h3>
                    <p>Siberian tiger</p>
                  </div>
                  <div className="info">
                    <h3>Species</h3>
                    <p>Siberian tiger</p>
                  </div>

                  <div className="info">
                    <h3>Species</h3>
                    <p>Siberian tiger</p>
                  </div>

                  <div className="info">
                    <h3>Species</h3>
                    <p>Siberian tiger</p>
                  </div>
                </div>
              </div>
              <div className="ig">
                <h2 className="hlt">Art Tags</h2>
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
                <h2 className="hlt">Credits</h2>
                <div className="il">
                  <div className="info">
                    <h3>Art</h3>
                    <p>Siberian tiger</p>
                  </div>
                  <div className="info">
                    <h3>Rigging</h3>
                    <p>Siberian tiger</p>
                  </div>
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
          <h2 className="hlt">Official Illustrations</h2>
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
