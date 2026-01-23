"use client";

import { DILATHON_SPONSORED_TRACKS, TRACKS } from "@/app/config";
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { useWidthCutoff } from "@/hooks/use-mobile";

const SHADOWCOLOR = ["red", "yellow", "green", "blue", "purple"];

export default function Tracks() {
  const smallerFont = useWidthCutoff(582);
  const switchToSingleColumn = useWidthCutoff(1144);
  const verySmall = useWidthCutoff(484);

  return (
    <div id="tracks" className="flex flex-col items-center">
      <div
        className={cn(
          "font-[Nippo-Variable] mb-16",
          verySmall ? "text-6xl" : "text-8xl",
        )}
      >
        Tracks
      </div>
      <div
        className={cn(
          "grid gap-4 w-[80vw] justify-evenly text-center",
          switchToSingleColumn ? "grid-cols-1" : "grid-cols-2",
        )}
      >
        {DILATHON_SPONSORED_TRACKS.map((track, i) => (
          <Card
            key={`dilathon-track-${i}`}
            className={cn(
              "p-4 flex flex-col h-auto justify-evenly",
              SHADOWCOLOR[i % SHADOWCOLOR.length] + "shadow",
            )}
          >
            <CardTitle>
              <div
                className={cn(
                  "font-[Nippo-Variable]",
                  smallerFont ? "text-xl" : "text-4xl",
                )}
              >
                {track.name}
              </div>
            </CardTitle>
            <div className="flex flex-col gap-2 text-start">
              <div className="font-bold text-lg">Problem</div>
              <div className="text-lg text-[#fb542b]">{track.problem}</div>
              <div className="font-bold text-lg">Challenge</div>
              <div className="text-lg text-[#68b8ff]">{track.challenge}</div>
              <div className="font-bold text-lg">Requirements</div>
              <div className="flex flex-col ml-4">
                {track.requirements.map((requirement, j) => (
                  <div key={`dilathon-track-${i}-requirement-${j}`}>
                    {requirement}
                  </div>
                ))}
              </div>

              <div
                className={cn(
                  "mt-4 p-3 border-l-4",
                  SHADOWCOLOR[i % SHADOWCOLOR.length] + "border",
                )}
              >
                <div
                  className={cn(
                    "font-extrabold text-xl uppercase",
                    SHADOWCOLOR[i % SHADOWCOLOR.length] + "text",
                  )}
                >
                  PPI Opportunity
                </div>

                <div className="font-bold text-lg text-[#1C1C1C] mt-1">
                  Selecting this track makes you eligible for a
                  <span
                    className={cn(
                      "ml-1",
                      SHADOWCOLOR[i % SHADOWCOLOR.length] + "text",
                    )}
                  >
                    Pre-Placement Offer (PPI)
                  </span>{" "}
                  from Dilaton.
                </div>
              </div>
            </div>
          </Card>
        ))}
        <Card
          className={cn(
            "p-4 flex flex-col h-auto justify-evenly",
            SHADOWCOLOR[DILATHON_SPONSORED_TRACKS.length % SHADOWCOLOR.length] +
              "shadow",
          )}
        >
          <CardTitle>
            <div
              className={cn(
                "font-[Nippo-Variable]",
                smallerFont ? "text-xl" : "text-4xl",
              )}
            >
              OPEN DEFENCE INNOVATION
            </div>
          </CardTitle>
          <div className="text-md">
            Surprise us! Propose + prototype any defense-relevant drone
            solution: Counter-UAV jamming Swarm coordination Thermal target
            tracking Autonomous package delivery (ISR) Your wildest idea...
          </div>

          <div
            className={cn(
              "mt-4 p-3 border-l-4 text-left",
              SHADOWCOLOR[
                DILATHON_SPONSORED_TRACKS.length % SHADOWCOLOR.length
              ] + "border",
            )}
          >
            <div
              className={cn(
                "font-extrabold text-xl uppercase",
                SHADOWCOLOR[
                  DILATHON_SPONSORED_TRACKS.length % SHADOWCOLOR.length
                ] + "text",
              )}
            >
              PPI Opportunity
            </div>

            <div className="font-bold text-lg text-[#1C1C1C] mt-1">
              Selecting this track makes you eligible for a
              <span
                className={cn(
                  "ml-1",
                  SHADOWCOLOR[
                    DILATHON_SPONSORED_TRACKS.length % SHADOWCOLOR.length
                  ] + "text",
                )}
              >
                Pre-Placement Offer (PPI)
              </span>{" "}
              from Dilaton.
            </div>
          </div>
        </Card>
        {TRACKS.map((track, i) => (
          <Card
            key={`track-${i}`}
            className={cn(
              "p-4 flex flex-col h-auto justify-evenly",
              SHADOWCOLOR[i % SHADOWCOLOR.length] + "shadow",
            )}
          >
            <CardTitle>
              <div
                className={cn(
                  "font-[Nippo-Variable]",
                  smallerFont ? "text-2xl" : "text-6xl",
                )}
              >
                {track.name}
              </div>
              <div className="text-lg">{track.sdg}</div>
            </CardTitle>
            <div className="text-md">{track.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
