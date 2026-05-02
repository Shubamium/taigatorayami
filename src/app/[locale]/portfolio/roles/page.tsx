import React from "react";

type Props = {};

import "../portfolio.scss";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useTranslations } from "next-intl";
export default function Roles({}: Props) {
  const t = useTranslations("portfolio");
  return (
    <main
      id="p_portfolio"
      style={{
        display: "block",
      }}
    >
      {" "}
      <section id="reel-heading">
        <h2 className="styled">
          <img src="/d/claw_light.svg" alt="" className="claw" />
          {t("roles")}
        </h2>
        <p>
          {t("checkOutAll")}{" "}
          <Link className="sub" href={"/portfolio"}>
            {t("demoReels")}
          </Link>{" "}
          and{" "}
          <Link href={"/portfolio/roles"} className="sub act">
            {t("roles")}!
          </Link>
        </p>
      </section>
      <section className="role-selection">
        <div className="confine panel">
          <h2 className="hlt">{t("majorRoles")}</h2>

          <button className="btn btn-arrow l">
            <BiChevronRight />
          </button>
          <div className="roles">
            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />
            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />

            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />

            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />

            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
          </div>
          <button className="btn btn-arrow r">
            <BiChevronLeft />
          </button>
        </div>
      </section>
      <section className="role-selection">
        <div className="confine panel">
          <h2 className="hlt">{t("minorRoles")}</h2>

          <button className="btn btn-arrow l">
            <BiChevronRight />
          </button>
          <div className="roles">
            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />
            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />

            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />

            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
            <hr />

            <div className="role">
              <img src="/g/pfpplaceholder.png" alt="" className="pfp" />
              <p>COMING SOON</p>
            </div>
          </div>
          <button className="btn btn-arrow r">
            <BiChevronLeft />
          </button>
        </div>
      </section>
    </main>
  );
}
