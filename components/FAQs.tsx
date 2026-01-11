import { FAQ } from "@/app/config"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

export default function FAQs() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">FAQs</div>
      <div className="flex w-[100vw] justify-evenly text-center p-8">
        <Accordion type="single" collapsible className="w-full max-w-3xl">
          {FAQ.map(({ question, answer }, i) => (
            <AccordionItem value={`faq-${i}`} key={`faq-${i}`}>
              <AccordionTrigger className="text-2xl">{question}</AccordionTrigger>
              <AccordionContent className="text-xl">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

