import payloadConfig from "@/payload.config";
import { getPayload } from "payload";
import ContactPopUp from "./ContactPopUp";

type Props = {};

export default async function ContactPopUpDataWrapper({}: Props) {
  const p = await getPayload({
    config: await payloadConfig,
  });

  const cd = await p.findGlobal({ slug: "contact" });
  return <ContactPopUp formData={cd.contactNotice as any} />;
}
