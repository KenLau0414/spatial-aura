 export default function Hero() {
   return (
     <section className="pt-[140px] pb-20 text-center bg-gradient-to-b from-[var(--bg)] to-[#F3F1EC]">
       <div className="max-w-[900px] mx-auto px-6">
         <div className="inline-block bg-[rgba(201,169,97,0.12)] text-[var(--accent)] px-5 py-2 rounded-[50px] text-xs font-semibold tracking-[1px] mb-6">
           REMOTE FENG SHUI CONSULTATION
         </div>
 
         <h1 className="text-[40px] md:text-5xl mb-5 max-w-[700px] mx-auto">
           Your home is talking.<br />
           <span className="text-[var(--primary)] italic">Are you listening?</span>
         </h1>
 
         <p className="text-lg text-[var(--text-secondary)] max-w-[540px] mx-auto mb-9">
           The way your furniture sits, the direction your bed faces, the corners where energy gets stuck — they all shape how you sleep, how you earn, and how you feel. Let&apos;s fix what&apos;s blocking you.
         </p>
 
         <div className="flex gap-4 justify-center flex-wrap">
           <a
             href="#book"
             className="inline-block px-10 py-4 rounded-[50px] text-base font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,74,62,0.3)] transition-all"
           >
             Submit</a>
           <a
             href="#service"
             className="inline-block px-10 py-4 rounded-[50px] text-base font-semibold text-[var(--primary)] border-2 border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
           >
             See What&apos;s Included
           </a>
         </div>
        </div>
     </section>
   )
 }
