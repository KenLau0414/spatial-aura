'use client'

 import { useState } from 'react'
 import { Plus, Minus } from 'lucide-react'

 const faqs = [
   {
     q: "Do I need to provide my exact birth time？",
     a: "Yes, exact time matters! Also, please double-check if daylight saving time (DST) was active in your birth location/state on the day you were born. The most reliable source is your official birth certificate. If you don't have a birth certificate or can only provide a rough guess, it will significantly impact the accuracy of your reading—and the same goes for daylight saving time. Small details make a huge difference in your cosmic code!",
   },
   {
     q: "Does this work if I rent my apartment?",
     a: "Absolutely. Most of the changes we recommend don't require renovations — they involve furniture placement, decluttering, lighting, and simple additions. Renters often see the fastest results because their spaces are smaller and easier to shift.",
   },
   {
     q: "Is this religious or spiritual?",
     a: "No. Feng Shui is an environmental practice — it's about how spatial arrangement affects energy flow and, by extension, your daily experience. You don't need to believe in anything for it to work, the same way you don't need to believe in architecture for a building to stand.",
   },
   {
     q: "How soon will I see results?",
     a: "Many clients report feeling an immediate shift in their home's atmosphere after making the changes. External changes — improved sleep, better focus, shifts in finances or relationships — typically unfold over 2 to 6 weeks. The action plan is designed to be implemented within a few days.",
   },
   {
     q: "What if I'm not satisfied?",
     a: "If after implementing the recommended changes for 30 days you don't feel any shift in your home's energy, I offer a free follow-up session to reassess and adjust. Your comfort with the process matters.",
   },
 ]

 export default function FAQ() {
   const [openIndex, setOpenIndex] = useState<number | null>(null)

   const toggle = (i: number) => {
     setOpenIndex(openIndex === i ? null : i)
   }

   return (
     <section className="py-20 bg-white" id="faq">
       <div className="max-w-[900px] mx-auto px-6">
         <div className="text-center text-xs tracking-[2px] uppercase text-[var(--accent)] mb-4 font-semibold">
           Questions
         </div>
         <h2 className="text-center text-3xl md:text-4xl mb-5 text-[var(--text)]">
           Before You Book
         </h2>

         <div className="max-w-[680px] mx-auto">
           {faqs.map((faq, i) => (
             <div
               key={i}
               className={`border-b border-[var(--border)] py-6 ${i === 0 ? 'border-t' : ''}`}
             >
               <button
                 className="w-full flex justify-between items-center text-left"
                 onClick={() => toggle(i)}
               >
                 <h4 className="font-serif text-lg text-[var(--text)]">{faq.q}</h4>
                 <span className="text-[var(--accent)] shrink-0 ml-4">
                   {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                 </span>
               </button>
               {openIndex === i && (
                 <p className="text-[15px] text-[var(--text-secondary)] mt-3">
                   {faq.a}
                 </p>
               )}
             </div>
           ))}
         </div>
       </div>
     </section>
   )
 }
