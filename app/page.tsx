 import Navbar from '@/components/Navbar'
 import Hero from '@/components/Hero'
 import PainPoints from '@/components/PainPoints'
 import Service from '@/components/Service'
 import About from '@/components/About'
 import Testimonials from '@/components/Testimonials'
 import FAQ from '@/components/FAQ'
 import CTAForm from '@/components/CTAForm'
 import Footer from '@/components/Footer'
 
 export default function HomePage() {
   return (
     <main className="min-h-screen">
       <Navbar />
       <Hero />
       <PainPoints />
       <Service />
       <About />
       <Testimonials />
       <FAQ />
       <CTAForm />
       <Footer />
     </main>
   )
 }
