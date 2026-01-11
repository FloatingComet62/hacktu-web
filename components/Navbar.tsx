"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { useIsMobile, useWidthCutoff } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar({ items }: {
  items: {
    name: string;
    link: string
  }[]
}) {
  const hideBanner = useWidthCutoff(1000);
  return (
    <NavigationMenu viewport={useIsMobile()} className="z-5 h-24 fixed bg-white p-4 border-black">
    <NavigationMenuList className="w-[50vw] justify-start pl-4">
    <div className="bg-main p-2 rounded-4xl">
      <Image src="/ccs_logo_white.png" alt="CCS Logo" width={40} height={40} />
    </div>
    </NavigationMenuList>
    <NavigationMenuList className="w-[50vw] justify-end pr-4">
      {items.map(({ name, link }) => (
        <NavigationMenuItem key={`navbar-item-${name}`}>
          <NavigationMenuLink href={link} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-xl")}>
            {name}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
      {hideBanner || (
        <NavigationMenuItem>
          <Image
            className="translate-y-[25%]"
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
            alt="Major League Hacking 2026"
            width={120}
            height={120}
          />
        </NavigationMenuItem>
      )}
    </NavigationMenuList>
    </NavigationMenu>
  )
}
