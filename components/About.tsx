 export default function About() {
   return (
     <section className="py-20 bg-white" id="about">
       <div className="max-w-[900px] mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-[60px] items-center">
           <img src="/Gemini_Sample03.png" 
            alt="Jason L - Feng Shui Consultant" 
            className="w-full aspect-square rounded-[12px] object-cover shadow-sm"
           />
           <div>
             <div className="text-xs tracking-[2px] uppercase text-[var(--accent)] mb-4 font-semibold">
               Your Consultant
             </div>
             <h2 className="font-serif text-[32px] mb-5">
               I don&apos;t sell superstition. I sell alignment.
             </h2>
             <p className="text-[16px] text-[var(--text-secondary)] mb-4">
               I&apos;m <strong>Jason L</strong>, a Feng Shui consultant who bridges classical Chinese Feng Shui with modern spatial psychology. I&apos;ve studied traditional Flying Stars, Bagua mapping, and Five Elements theory — but I translate them into language and actions that make sense for modern homes.
             </p>
             <p className="text-[16px] text-[var(--text-secondary)] mb-4">
               My approach is practical, not mystical. I won&apos;t tell you to hang red strings or buy crystal balls. I&apos;ll tell you why your bed shouldn&apos;t face that wall, why your kitchen might be draining your finances, and why the entryway to your apartment is the most important 3 square feet in your life.
             </p>
             <p className="text-[16px] text-[var(--text-secondary)] mb-4">
               Every consultation starts with one question: <em>&ldquo;What&apos;s not working in your life right now?&rdquo;</em> The answer usually points straight to a room in your home.
             </p>
             <div className="flex gap-10 mt-8">
               <div>
                 <div className="font-serif text-[36px] text-[var(--primary)] font-bold">500+</div>
                 <div className="text-[13px] text-[var(--text-light)] uppercase tracking-[1px]">Homes Assessed</div>
               </div>
               <div>
                 <div className="font-serif text-[36px] text-[var(--primary)] font-bold">90 min</div>
                 <div className="text-[13px] text-[var(--text-light)] uppercase tracking-[1px]">Per Session</div>
               </div>
               <div>
                 <div className="font-serif text-[36px] text-[var(--primary)] font-bold">48 hrs</div>
                 <div className="text-[13px] text-[var(--text-light)] uppercase tracking-[1px]">Report Delivery</div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   )
 }
