"use client";
import React, { useEffect, useState } from "react";

type Props = {
  formData: any[];
};

import "./contactPopUp.scss";
import { FaPenToSquare } from "react-icons/fa6";
import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import ReactLenis from "lenis/react";
export default function ContactPopUp({ formData }: Props) {
  const [visible, setVisible] = useState(false);

  const togglePopup = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    window.addEventListener("ctform", togglePopup);
  }, []);
  return (
    <div
      id="contact_pp"
      className={visible ? "visible" : "closed"}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="dialog">
        <div className="heading">
          <h2>CONTACT T.O.S.</h2>
          <hr />
        </div>
        <ReactLenis className="content">
          <RichText data={formData as any} />
          {/* <strong>IMPORTANT</strong>
          <p>
            Please review the information below carefully before submitting your
            email. Kindly note that Taiga reserves the right to decline or not
            respond to certain inquiries or requests at her discretion!
          </p>{" "}
          <strong>※ BUSINESS INQUIRIES</strong>
          <p>
            For all business inquiries, please ensure that your email is clear
            and includes all relevant details necessary for review.  Business
            inquiries include, but is not limited to:๑ Voice acting
            opportunities ๑ YouTube / Twitch collaborations ๑ Interviews ๑
            Sponsorships ๑ Other professional proposals. Please include key
            details such as project scope, deadlines, usage rights,
            compensation, and any relevant deliverables, along with contact
            information (Discord username, Twitter handle, etc.) to ensure
            smooth communication throughout the process. If appli
          </p>
          <p>
             provide links to your company, channel, or prior work to
            establish credibility. All information submitted should be accurate
            and verifiable. Vague or incomplete proposals may not be considered.
            Please note that Taiga is not accepting any merchandise-related
            proposals at this time. Any inquiries regarding merchandise, product
            lines, or similar collaborations will be disregarded until January
            2027.
          </p> */}
        </ReactLenis>

        <div className="footer">
          <Link href={"/contact"} className="btn btn-contact">
            <img src="/d/texture-border_r.png" alt="" className="border" />
            <span>CONTACT FORM</span> <FaPenToSquare />
          </Link>
        </div>
      </div>
    </div>
  );
}
