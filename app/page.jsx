import Head from "next/head";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Script from "next/script";
import Section1 from "@/Components/Section1";
export default function page() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />
      <Section1/>
      <Script
        src="https://kit.fontawesome.com/2f91ad583c.js"
        crossorigin="anonymous"
      ></Script>
    </>
  );
}
