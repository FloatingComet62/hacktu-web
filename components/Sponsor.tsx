import { SOCIALS, SPONSOR_PACKET, SPONSORS } from "@/app/config"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Sponsor</div>
      <div className="flex flex-col w-[100vw] justify-evenly items-center text-center p-8">
      {SPONSORS.map(({ image_link, link, name }) => (
        <Link key={`sponsor-${name}`} href={link}>
          <Image src={image_link} width={1200} height={800} alt={name} />
        </Link>
      ))}
      <div className="flex flex-col gap-4 font-[Nippo-Variable]">
        <div className="text-6xl">Looking to Sponsor?</div>
        <div className="text-4xl">See our sponsor packet below and reach out to us</div>
        <Link href={SOCIALS.mail} className="text-4xl underline">here!</Link>
        <Link href={SPONSOR_PACKET}>
          <Button className="h-auto text-5xl p-4 cursor-pointer w-full">Sponsor Packet</Button>
        </Link>
      </div>
      </div>
    </div>
  )
}

