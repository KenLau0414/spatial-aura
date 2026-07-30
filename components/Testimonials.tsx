 const testimonials = [
   {
     text: "After moving my bed and clearing the clutter in my wealth corner, I landed a new client within two weeks. I was skeptical — but the energy in my apartment genuinely feels different now.",
     name: "Sarah M.",
     role: "Freelance Designer, Brooklyn",
   },
   {
     text: "I booked a session because I couldn't sleep. Jason L identified three issues in my bedroom I'd never noticed. First night after the changes, I slept through for the first time in months.",
     name: "James L.",
     role: "Software Engineer, Austin",
   },
   {
     text: "The written report alone was worth the price. Clear, specific, with diagrams. My partner and I stopped arguing about the living room layout — turns out the energy was the problem, not us.",
     name: "Priya & Tom",
     role: "Homeowners, Seattle",
   },
 ]
 
 export default function Testimonials() {
   return (
     <section className="py-20 bg-[var(--bg)]">
       <div className="max-w-[900px] mx-auto px-6">
         <div className="text-center text-xs tracking-[2px] uppercase text-[var(--accent)] mb-4 font-semibold">
           Client Experiences
         </div>
         <h2 className="text-center text-3xl md:text-4xl mb-5 text-[var(--text)]">
           What Changes After a Session
         </h2>
         <p className="text-center text-[17px] text-[var(--text-secondary)] max-w-[560px] mx-auto mb-[50px]">
           Every home is different, but these are the kinds of shifts clients commonly report after implementing their action plans.
         </p>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {testimonials.map((t) => (
             <div
               key={t.name}
               className="bg-white rounded-[12px] p-8 border border-[var(--border)]"
             >
               <div className="text-[var(--accent)] text-base mb-4 tracking-[2px]">
                 ★★★★★
               </div>
               <p className="text-[15px] text-[var(--text)] mb-5 italic">
                 &ldquo;{t.text}&rdquo;
               </p>
               <div className="text-sm">
                 <div className="font-semibold text-[var(--text)]">{t.name}</div>
                 <div className="text-[var(--text-light)]">{t.role}</div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   )
 }
