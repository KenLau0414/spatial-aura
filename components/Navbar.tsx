 'use client'
 
 import { useState } from 'react'
 import { Menu, X } from 'lucide-react'
 
 const navLinks = [
   { href: '#service', label: 'Service' },
   { href: '#about', label: 'About' },
   { href: '#faq', label: 'FAQ' },
 ]
 
 export default function Navbar() {
   const [open, setOpen] = useState(false)
 
   return (
     <nav className="fixed top-0 left-0 right-0 z-100 bg-[var(--bg)]/95 backdrop-blur-[10px] border-b border-[var(--border)] py-4">
       <div className="max-w-[900px] mx-auto px-6 flex items-center justify-between">
         <a href="#" className="font-serif text-xl font-bold text-[var(--primary)] tracking-[0.5px]">
           Eastern<span className="text-[var(--accent)]">Flow</span>
         </a>
 
         {/* Desktop links */}
         <div className="hidden md:flex items-center gap-8">
           {navLinks.map((link) => (
             <a
               key={link.href}
               href={link.href}
               className="text-[var(--text-secondary)] text-[15px] hover:text-[var(--primary)] transition-colors"
             >
               {link.label}
             </a>
           ))}
           <a href="#book" className="inline-block px-7 py-2.5 rounded-[50px] text-sm font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(45,74,62,0.3)] transition-all">
             Book Now
           </a>
         </div>
 
         {/* Mobile hamburger */}
         <button
           className="md:hidden text-[var(--text-secondary)]"
           onClick={() => setOpen(!open)}
           aria-label="Toggle menu"
         >
           {open ? <X size={24} /> : <Menu size={24} />}
         </button>
       </div>
 
       {/* Mobile menu */}
       {open && (
         <div className="md:hidden bg-[var(--bg)]/98 backdrop-blur-md border-t border-[var(--border)] mt-4">
           <div className="max-w-[900px] mx-auto px-6 py-4 flex flex-col gap-4">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 className="text-[var(--text-secondary)] text-[15px] py-2"
                 onClick={() => setOpen(false)}
               >
                 {link.label}
               </a>
             ))}
             <a
               href="#book"
               className="inline-block px-7 py-2.5 rounded-[50px] text-sm font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] text-center"
               onClick={() => setOpen(false)}
             >
               Book Now
             </a>
           </div>
         </div>
       )}
     </nav>
   )
 }
