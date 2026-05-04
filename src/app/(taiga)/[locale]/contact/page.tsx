"use client";
import React, { useState } from "react";

type Props = {};

import "./contact.scss";
import { FaPenToSquare, FaSpinner } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { sendMail } from "@/function/mail";

export default function Contact({}: Props) {
  const t = useTranslations("contact");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <main id="p_contact">
      <AnimatePresence>
        {loading && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="loadinger"
          >
            <FaSpinner />
            <p>{status}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <section id="contact">
        <div className="confine">
          <h2 className="hlt">{t("contact")}</h2>
          <p>
            {t("inquiry")}
            <br /> {t("use")}
          </p>

          <form
            id="formcontact"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData);
              console.log(data);
              const name = data.name as string;
              const email = data.email as string;

              setLoading(true);
              setStatus("Sending....");
              const res = await sendMail(name, email);
              if (res) {
                setStatus("Email submitted!");
              } else {
                setStatus("Something went wrong!");
              }
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }}
          >
            <div className="ig">
              <label htmlFor="name">{t("name")}</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder={t("name_p")}
              />
            </div>
            <div className="ig">
              <label htmlFor="email">Email</label>
              <textarea
                name="email"
                required
                id="email"
                placeholder={t("email_p")}
              />
            </div>
            <div className="action">
              <button type="submit" className="btn btnsub">
                <img
                  src="/d/texture-bordermail.png"
                  alt=""
                  className="border"
                />
                {t("send")} <FaPenToSquare />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
