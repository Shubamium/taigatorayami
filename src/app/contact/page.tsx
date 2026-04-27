import React from "react";

type Props = {};

import "./contact.scss";
import { FaPenToSquare } from "react-icons/fa6";
export default function Contact({}: Props) {
  return (
    <main id="p_contact">
      <section id="contact">
        <div className="confine">
          <h2 className="hlt">Contact</h2>
          <p>
            Have a business inquiry? Need to get in contact? <br /> Use this
            contact section to send me an email!
          </p>

          <form id="formcontact">
            <div className="ig">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Write your name here!"
              />
            </div>
            <div className="ig">
              <label htmlFor="email">Email</label>
              <textarea
                name="email"
                id="email"
                placeholder="Write your email here"
              />
            </div>
            <div className="action">
              <button type="submit" className="btn btnsub">
                <img
                  src="
								/d/texture-bordermail.png"
                  alt=""
                  className="border"
                />
                SEND EMAIL <FaPenToSquare />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
