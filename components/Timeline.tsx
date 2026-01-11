import { useState } from "react";
import { TimelineItem, TIMELINE } from "@/app/config"
import { Calendar } from "@/components/ui/calendar";
import { Button } from "react-day-picker";

export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const grouped = [] as { item: TimelineItem, index: number }[][];
  for (let i = 0; i < TIMELINE.length; i++) {
    if (i % 2 == 0) grouped.push([]);
    console.assert(grouped.length > 0);
    grouped[grouped.length - 1].push({ item: TIMELINE[i], index: i });
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Timeline</div>
      <div className="flex flex-col items-center gap-4">
      {grouped.map((timeline_items, i) => (
        <div key={`timeline-group-${i}`} className="flex gap-4">
        {timeline_items.map(({ item, index }) => (
          <Button key={`timeline-item-${index}`} variant="reverse" className="bg-main h-auto" onClick={() => setCurrentIndex(index)}>
            <div className="flex flex-col w-[40vw] whitespace-normal gap-4 p-4">
              <div className="text-4xl font-[Nippo-Variable]">{item.title}</div>
              <div className="text-xl">{item.description}</div>
            </div>
          </Button>
        ))}
        </div>
      ))}
      </div>
      <div className="flex w-[100vw] justify-evenly text-center">
        <Calendar
          mode="range"
          hideNavigation
          defaultMonth={TIMELINE[currentIndex].start_date}
          selected={{ from: TIMELINE[currentIndex].start_date, to: TIMELINE[currentIndex].end_date}}
          numberOfMonths={2}
          onSelect={() => {}}
        />
      </div>
    </div>
  )
}

