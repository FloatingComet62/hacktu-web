import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

function navbarItem(name: string, link: string) {
  return { name, link }
}

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <Navbar items={[
        navbarItem("Register", "https://example.com"),
        navbarItem("Sponsors", "https://example.com"),
        navbarItem("FAQs", "https://example.com"),
        navbarItem("Contact", "https://example.com"),
      ]} />
      <Button>Apply with Devfolio</Button>
    </div>
  );
}
