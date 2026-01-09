"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function Navbar({ items }: {
  items: {
    name: string;
    link: string
  }[]
}) {
  return (
    <NavigationMenu viewport={useIsMobile()} className="z-5 fixed">
    <NavigationMenuList className="w-[80vw]">
      {items.map(({ name, link }) => (
        <NavigationMenuItem key={`navbar-item-${name}`}>
          <NavigationMenuLink href={link} className={cn(navigationMenuTriggerStyle(), "text-white hover:text-black transition-all duration-300ms")}>
            {name}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
    </NavigationMenu>
  )
}
