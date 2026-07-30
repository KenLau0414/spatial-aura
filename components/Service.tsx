 export default function Service() {
   return (
     <section className="py-20 bg-[var(--bg)]" id="service">
       <div className="max-w-[900px] mx-auto px-6">
         <div className="text-center text-xs tracking-[2px] uppercase text-[var(--accent)] mb-4 font-semibold">
           The Solution
         </div>
         <h2 className="text-center text-3xl md:text-4xl mb-5 text-[var(--text)]">
           Home Energy Assessment
         </h2>
         <p className="text-center text-[17px] text-[var(--text-secondary)] max-w-[560px] mx-auto mb-[50px]">
           A complete remote Feng Shui consultation that identifies what&apos;s blocking your home&apos;s energy — and gives you simple, actionable steps to fix it.
         </p>
 
         <div className="max-w-[640px] mx-auto bg-white rounded-[12px] shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
           <div className="bg-[var(--primary)] text-white text-center px-10 py-10">
             <h3 className="font-serif text-[28px] mb-2">Full Home Energy Assessment</h3>
             <div className="font-serif text-[42px] mt-4">$197</div>
             <div className="text-sm opacity-80 mt-1">Remote assessment· Floor plan analysis· Written report included</div>
           </div>
           <div className="px-10 py-10">
             <ul className="list-none mb-8">
               <li className="flex items-start gap-3 py-3 border-b border-[var(--border)] text-[15px]">
                 <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                 <span><strong>Your Complete Soul Blueprint</strong> — Decode the timing of your breakthroughs, challenges, and golden opportunities.</span>
               </li>
               <li className="flex items-start gap-3 py-3 border-b border-[var(--border)] text-[15px]">
                 <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                 <span><strong>Complete floor plan energy map</strong> — identifying blocked zones, draining areas, and wealth corners</span>
               </li>
               <li className="flex items-start gap-3 py-3 border-b border-[var(--border)] text-[15px]">
                 <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                 <span><strong>Personalized action plan</strong> — specific changes for your bedroom, kitchen, entrance, and workspace</span>
               </li>
               <li className="flex items-start gap-3 py-3 border-b border-[var(--border)] text-[15px]">
                 <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                 <span><strong>Written report</strong> — delivered within 48 hours, with diagrams and step-by-step instructions</span>
               </li>
               <li className="flex items-start gap-3 py-3 border-b border-[var(--border)] text-[15px]">
                 <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                 <span><strong>No renovations required</strong> — most fixes involve repositioning, decluttering, and simple adjustments</span>
               </li>
             </ul>
             <a
               href="#book"
               className="block w-full px-10 py-4 rounded-[50px] text-base font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,74,62,0.3)] transition-all text-center"
             >
               Book Your Assessment
             </a>
             <div className="text-center mt-4 text-[13px] text-[var(--text-light)]">
               Limited to 8 sessions per month · Currently accepting new clients
             </div>
           </div>
         </div>
       </div>
     </section>
   )
 }
