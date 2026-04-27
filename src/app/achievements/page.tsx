import React from "react";

type Props = {};
import "./achievements.scss";
export default function page({}: Props) {
  return (
    <main id="p_achievements">
      <div className="confine">
        <img src="/p/achievements.png" alt="" className="bgtext" />
      </div>
      <div className="special-heading">
        <img src="/d/claw_dark.svg" alt="" className="claw l" />
        <img src="/d/claw_light.svg" alt="" className="claw r" />
        <h2 className="hlt">Achievements &</h2>
        <p className="sht">Memories</p>
        <hr />
      </div>
      <section id="imglist">
        <img src="/g/refsheetph.png" alt="" />
        <img src="/g/refsheetph.png" alt="" />
        <img src="/g/refsheetph.png" alt="" />
        <img src="/g/refsheetph.png" alt="" />
      </section>

      <div className="circle r"></div>
      <div className="circle l"></div>
      <section id="biography">
        <div className="biohead">
          <a className="hlt">Biography</a>
          <img src="/d/trophy.png" alt="" className="trophydecor" />
          <div className="ctrl">
            <button className="btn btn-year act">
              {" "}
              <img src="/d/texture-borderyear.png" alt="" />
              2026
            </button>
            <button className="btn btn-year">
              <img src="/d/texture-borderyear.png" alt="" />
              2027
            </button>
            <button className="btn btn-year">
              <img src="/d/texture-borderyear.png" alt="" />
              2028
            </button>
          </div>
        </div>
        <div className="list">
          <div className="line">
            <div className="l"></div>
          </div>
          <div className="datelist">
            <div className="date">
              <p className="d">???? . ?? . ??</p>
              <p className="name">Taiga Debuts 3.0 Model!</p>
            </div>
            <div className="date">
              <p className="d">???? . ?? . ??</p>
              <p className="name">Taiga Debuts 3.0 Model!</p>
            </div>
            <div className="date">
              <p className="d">???? . ?? . ??</p>
              <p className="name">Taiga Debuts 3.0 Model!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
