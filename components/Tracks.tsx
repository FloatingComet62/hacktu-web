import { Track, TRACKS } from "@/app/config"
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

const SHADOWCOLOR = ["red", "yellow", "green", "blue", "purple"]
export default function Tracks() {
  const grouped = [] as { track: Track, index: number }[][];
  for (let i = 0; i < TRACKS.length; i++) {
    if (i % 2 == 0) grouped.push([]);
    console.assert(grouped.length > 0);
    grouped[grouped.length - 1].push({ track: TRACKS[i], index: i });
  }
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Tracks</div>
      <div className="flex flex-col gap-4 w-[80vw] justify-evenly text-center">
      {grouped.map((tracks, i) => (
        <div key={`track-group-${i}`} className="flex gap-4">
          {tracks.map(({ track, index }, j) => (
            <Card key={`track-${index}`} className={cn("p-4 flex flex-col h-auto justify-evenly", SHADOWCOLOR[index % SHADOWCOLOR.length] + "shadow")}>
              <CardTitle>
                <div className="font-[Nippo-Variable] text-6xl">{track.name}</div>
                <div className="text-xl">{track.sdg}</div>
              </CardTitle>
              <div className="text-2xl">{track.description}</div>
            </Card>
          ))}
        </div>
      ))}
      </div>
    </div>
  )
}

