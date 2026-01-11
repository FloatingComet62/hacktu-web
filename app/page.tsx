"use client"

import Navbar from "@/components/Navbar";
import { NAVBAR } from "./config";

import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs";
import LastYear from "@/components/LastYear";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Sponsor from "@/components/Sponsor";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar items={NAVBAR} />
      <Hero />
      <div className="h-32"></div>
      <AboutUs />
      <div className="h-32"></div>
      <LastYear />
      <div className="h-32"></div>
      <Tracks />
      <div className="h-32"></div>
      <Timeline />
      <div className="h-32"></div>
      <Sponsor />
      <div className="h-32"></div>
      <FAQs />
      <div className="h-32"></div>
      <Footer />
    </div>
  );
}
