 const pains = [
   {
     icon: '💰',
     title: "Money comes in, flows right out",
     text: "You're earning, but somehow it never stays. Bills pile up, unexpected expenses keep hitting, and savings feel impossible.",
   },
   {
     icon: '😴',
     title: "You can't sleep properly",
     text: "Tossing and turning. Waking up tired. Your bedroom should restore you, but something about it feels heavy or restless.",
   },
   {
     icon: '💔',
     title: "Relationships feel stuck or tense",
     text: "Arguments over small things. Distance between you and your partner. The energy in your home might be feeding the friction.",
   },
   {
     icon: '🪫',
     title: "You feel drained at home",
     text: 'You walk in and feel heavier. Certain rooms feel "off." You can\'t focus, can\'t relax, can\'t explain why.',
   },
 ]
 
 export default function PainPoints() {
   return (
     <section className="py-20 bg-white" id="pain">
       <div className="max-w-[900px] mx-auto px-6">
         <div className="text-center text-xs tracking-[2px] uppercase text-[var(--accent)] mb-4 font-semibold">
           Does This Sound Familiar?
         </div>
         <h2 className="text-center text-3xl md:text-4xl mb-5 text-[var(--text)]">
           Your Home Might Be Working Against You
         </h2>
         <p className="text-center text-[17px] text-[var(--text-secondary)] max-w-[560px] mx-auto mb-[50px]">
           Most people live in spaces that quietly drain their energy, money, and relationships — without ever realizing the connection.
         </p>
 
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {pains.map((pain) => (
             <div
               key={pain.title}
               className="p-8 border border-[var(--border)] rounded-[12px] transition-all hover:shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:border-[var(--accent-light)]"
             >
               <div className="text-[28px] mb-3">{pain.icon}</div>
               <h3 className="font-serif text-xl mb-2">{pain.title}</h3>
               <p className="text-[15px] text-[var(--text-secondary)]">{pain.text}</p>
             </div>
           ))}
         </div>
 
         <div className="text-center mt-12 text-[19px] text-[var(--primary)] font-serif italic">
           &ldquo;It&apos;s not bad luck. It&apos;s blocked energy — and it can be shifted.&rdquo;
         </div>
       </div>
     </section>
   )
 }
