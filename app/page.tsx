import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
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
      <div className="flex flex-col text-center gap-4 mt-32">
        <div className="text-4xl font-bold">Registeration Deadline</div>
        <Countdown />
      </div>
      <Button>Apply with Devfolio</Button>
    </div>
  );
}
