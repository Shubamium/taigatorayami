import React from "react";

type Props = {};

import "../portfolio.scss";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
export default function Roles({}: Props) {
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
          Roles
        </h2>
        <p>
          Check out all of my{" "}
          <Link className="sub" href={"/portfolio"}>
            DEMO REELS
          </Link>{" "}
          and{" "}
          <Link href={"/portfolio/roles"} className="sub act">
            ROLES!
          </Link>
        </p>
      </section>
      <section className="role-selection">
        <div className="confine panel">
          <h2 className="hlt">Major Roles</h2>

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
          <h2 className="hlt">Minor Roles</h2>

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
