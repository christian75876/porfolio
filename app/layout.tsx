import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import CoverParticles from "@/components/cover-particles";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing page",
  description: "Landing page by Christian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        <CoverParticles />
        {children}
      </body>
    </html>
  );
}
