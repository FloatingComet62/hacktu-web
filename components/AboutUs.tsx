"use client";

import { HACKATHON_VERSION } from "@/app/config";
import { useWidthCutoff } from "@/hooks/use-mobile";
import Image from "next/image";

export default function AboutUs() {
  const hideImage = useWidthCutoff(1000);
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">About us</div>
      <div className="flex w-[100vw] justify-evenly items-center">
        <div className="text-3xl flex flex-col ml-8">
          <div><span className="text-main font-bold">Creative Computing Society</span> is back with <span className="text-main font-bold">HackTU {HACKATHON_VERSION}.0</span>, our flagship event</div>
          <div>hosted at Thapar Institute of Engineering and Technology, Patiala.</div>
          <div>We're excited to see what innovative ideas emerge from this year's event.</div>
          <div>Whether you're a seasoned developer or new to hackathons, there's something for everyone.</div>
          <div>Development is more than just coding—it's an adrenaline rush that drives innovation.</div>
          <div>Today's tech world demands solutions that are both cutting-edge and user-friendly.</div>
          <div><span className="text-main font-bold">Gear up your tech stack</span>, brainstorm innovative ideas, ignite team spirit,</div>
          <div>and build solutions for real-world problems at <span className="text-main font-bold">HackTU {HACKATHON_VERSION}.0</span> - the biggest offline hackathon at TIET!</div>
        </div>
        {hideImage || (
          <Image src="/about_graphic.png" alt="About graphic" width={400} height={400} />
        )}
      </div>
    </div>
  )
}

