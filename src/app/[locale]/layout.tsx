import type { Metadata } from "next";
import { Geist, Geist_Mono, Quattrocento } from "next/font/google";
import "./globals.scss";
import LocalFont from "next/font/local";
import Header from "./components/header/Header";
import { CSSProperties, Suspense } from "react";
import Footer from "./components/footer/Footer";
import ContactPopUp from "./components/contactPopUp/ContactPopUp";
import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

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
        <Suspense>
          <NextIntlClientProvider>
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
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
