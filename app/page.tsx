import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Countdown from "@/components/Countdown";

function navbarItem(name: string, link: string) {
  return { name, link }
}

function Hero() {
  return (
    <div className="w-[100vw] flex items-center justify-evenly">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col text-center gap-4">
          <div className="text-9xl font-black font-[Nippo-Variable]">HackTU 7.0</div>
          <div className="text-2xl font-medium font-[Nippo-Variable]">February 7th & 8th</div>
        </div>
        <Button className="flex bg-main w-[80%] h-auto p-0">
          <div className="flex justify-between items-center font-black">
            <div className="pt-8 pb-8 pl-8 text-4xl text-center text-white">Apply with Devfolio</div>
            <div className="bg-white w-[20%] pt-8 pb-8 pr-8 pl-8 pr-0">
              <Image src="devfolio.svg" alt="Devfolio Logo" width={200} height={0} />
            </div>
          </div>
        </Button>
        <div className="flex flex-col text-center">
          <div className="text-3xl">Registeration Deadline</div>
          <Countdown endTime="2026-01-19" />
        </div>
      </div>
      <div className="h-[80vh] w-[60vh] border-2">
      idhar image aayegi
      </div>
    </div>
  )
}

function LastYear() {
  return (
    <div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar items={[
        navbarItem("Register", "https://example.com"),
        navbarItem("Sponsors", "https://example.com"),
        navbarItem("FAQs", "https://example.com"),
        navbarItem("Contact", "https://example.com"),
      ]} />
      <div className="h-32"></div>
      <Hero />
      <LastYear />
    </div>
  );
}
