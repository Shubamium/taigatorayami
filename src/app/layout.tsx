import type { Metadata } from "next";
import { Geist, Geist_Mono, Quattrocento } from "next/font/google";
import "./globals.scss";
import LocalFont from "next/font/local";
import Header from "./components/header/Header";
import { CSSProperties } from "react";
import Footer from "./components/footer/Footer";
import ContactPopUp from "./components/contactPopUp/ContactPopUp";
import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";

const quattro = Quattrocento({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taiga Torayami",
  description: "Taiga Torayami Description",
};

const displayFont = LocalFont({
  src: "./fonts/blm.ttf",
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={
        {
          "--fontblm": displayFont.style.fontFamily,
          "--fontqtt": quattro.style.fontFamily,
        } as CSSProperties
      }
      data-scroll-behavior="smooth"
    >
      <body>
        <ReactLenis
          root
          options={{
            duration: 1,
            autoRaf: true,
          }}
        >
          <ContactPopUp />
          <Header />
          {children}

          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
