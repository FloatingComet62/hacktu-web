"use client";

import Script from "next/script";
import { Button } from "./ui/button";
import { SUBMISSION_PORTAL_LINK } from "@/app/config";
import { useEffect, useState } from "react";

export default function ApplyWithDevfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex flex-col items-center">
      <Script
        src="https://apply.devfolio.co/v2/sdk.js"
        strategy="afterInteractive"
      />
      <div 
        className="apply-button"
        data-hackathon-slug="hacktu7" 
        data-button-theme="light"
        style={{
          height: "44px",
          width: "312px"
        }}></div>
      <div className="font-[Nippo-Variable]">then</div>
      <Button onClick={() => open(SUBMISSION_PORTAL_LINK)} className="font-[Nippo-Variable]">
        Submit your idea
      </Button>
    </div>
  )
}
