"use server";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "vicnet.video@gmail.com",
    pass: process.env.SMTP_PASS,
  },
});
export async function sendMail(name: string, email: string) {
  const mail = await transporter.sendMail({
    from: "vicnet.video@gmail.com",
    to: process.env.SMTP_TARGET,
    subject: `[Website] Contact Email Submission from - ${name}`,
    text: `Name: ${name} \nEmail: ${email}`,
  });

  if (mail.accepted.length > 0) {
    return true;
  } else {
    return false;
  }
}
