'use client'

 import { useState, FormEvent } from 'react'

 export default function CTAForm() {
   const [submitted, setSubmitted] = useState(false)
   const [error, setError] = useState('')

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     setError('')

     const form = e.currentTarget
     const data = new FormData(form)

     try {
       const res = await fetch('https://formspree.io/f/xeenvodb', {
         method: 'POST',
         body: data,
         headers: { Accept: 'application/json' },
       })

       if (res.ok) {
         setSubmitted(true)
         form.reset()
       } else {
         setError('Something went wrong. Please try again or email me directly.')
       }
     } catch {
       setError('Network error. Please check your connection and try again.')
     }
   }

   if (submitted) {
     return (
       <section className="py-20 bg-[var(--primary)] text-white text-center" id="book">
         <div className="max-w-[900px] mx-auto px-6">
           <h2 className="font-serif text-3xl md:text-4xl mb-4">Thank You!</h2>
           <p className="text-[17px] opacity-85 max-w-[500px] mx-auto">
             Your inquiry has been received. I personally review every submission and will respond within 24 hours to schedule your session.
           </p>
         </div>
       </section>
     )
   }

   return (
     <section className="py-20 bg-[var(--primary)] text-white text-center" id="book">
       <div className="max-w-[900px] mx-auto px-6">
         <h2 className="font-serif text-3xl md:text-4xl mb-4">
           Ready to Shift Your Home&apos;s Energy?
         </h2>
         <p className="text-[17px] opacity-85 max-w-[500px] mx-auto mb-10">
           Book your Home Energy Assessment below. I personally review every inquiry and will respond within 24 hours to schedule your session.
         </p>

         <form className="max-w-[480px] mx-auto" onSubmit={handleSubmit}>
           <input type="hidden" name="_subject" value="New Eastern Flow Inquiry" />
           <input type="text" name="name" placeholder="Your name" required
             className="w-full px-5 py-3.5 border-none rounded-lg mb-4 text-[15px] text-[var(--text)] bg-white/95 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" />
           <input type="email" name="email" placeholder="Email address" required
             className="w-full px-5 py-3.5 border-none rounded-lg mb-4 text-[15px] text-[var(--text)] bg-white/95 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" />
           <select name="concern" required
             className="w-full px-5 py-3.5 border-none rounded-lg mb-4 text-[15px] text-[var(--text)] bg-white/95 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]">
             <option value="">What&apos;s your main concern?</option>
             <option>Money / finances</option>
             <option>Sleep / health</option>
             <option>Relationships</option>
             <option>General energy / feeling stuck</option>
             <option>Something else</option>
           </select>
           <textarea name="message" placeholder="Tell me briefly what's going on in your home (optional)"
             className="w-full px-5 py-3.5 border-none rounded-lg mb-4 text-[15px] text-[var(--text)] bg-white/95 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-vertical min-h-[80px]"></textarea>

           <button type="submit"
             className="w-full px-10 py-4 rounded-[50px] text-base font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-light)] transition-all cursor-pointer">
             Request My Session — $197
           </button>

           {error && (
             <p className="text-sm text-red-300 mt-3">{error}</p>
           )}

           <div className="text-[13px] opacity-70 mt-3">
             Limited to 8 sessions per month. No payment required until your session is confirmed.
           </div>
         </form>
       </div>
     </section>
   )
 }
