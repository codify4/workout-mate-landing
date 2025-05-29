import React from 'react'
import { BlurFade } from './magicui/blur-fade'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { faq as faqData } from "@/constants/faq"


const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <BlurFade className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-white/70">Everything you need to know about Workout Mate</p>
          </BlurFade>

          <div className="max-w-3xl mx-auto">
            <BlurFade delay={0.2}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-zinc-900/50 rounded-xl border border-zinc-700/50 hover:border-white/20 transition-all duration-300 px-6 data-[state=open]:border-white/30"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-white/90 hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </BlurFade>
          </div>
        </div>
      </section>
  )
}

export default FaqSection