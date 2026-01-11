"use client";

import { useEffect } from "react";
import { Button } from "./ui/button";
import { SUBMISSION_PORTAL_LINK } from "@/app/config";

export default function ApplyWithDevfolio() {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      }
  }, []);
  return (
    <div className="flex flex-col items-center">
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
