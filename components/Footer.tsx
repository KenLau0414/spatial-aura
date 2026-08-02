 export default function Footer() {
   return (
     <footer className="bg-[#1A2B24] text-[rgba(255,255,255,0.6)] py-10 text-center text-sm">
       <div className="max-w-[900px] mx-auto px-6">
         <span className="font-serif text-white block mb-3">
           Eastern<span className="text-[var(--accent)]">Flow</span>
         </span>
         <div className="mb-3">
           <a href="#service" className="mx-3 hover:text-[var(--accent)] transition-colors">Service</a>
           <a href="#about" className="mx-3 hover:text-[var(--accent)] transition-colors">About</a>
           <a href="#faq" className="mx-3 hover:text-[var(--accent)] transition-colors">FAQ</a>
           <a href="#book" className="mx-3 hover:text-[var(--accent)] transition-colors">Book</a>
         </div>
         <div className="max-w-[600px] mx-auto text-xs opacity-50 mt-5">
           Feng Shui consultations are provided for environmental and spatial guidance purposes. Results vary by individual and space. This service does not guarantee specific financial, health, or relationship outcomes. &copy; 2026 Eastern Flow Feng Shui. All rights reserved.
         </div>
       </div>
     </footer>
   )
 }
