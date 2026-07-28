 import type { Metadata } from 'next'
 import Link from 'next/link'
 import { ArrowLeft, Download, Camera, Map as MapIcon, Video, ClipboardList, CheckSquare } from 'lucide-react'
 import '../globals.css'
 
 export const metadata: Metadata = {
   title: 'Photo & Information Guide — Eastern Flow Feng Shui',
   description: 'Step-by-step guide to prepare photos, floor plan, and video for your Home Energy Assessment consultation.',
 }
 
 // Reusable components
 const Badge = ({ children }: { children: React.ReactNode }) => (
   <span className="inline-block bg-[var(--primary)] text-white text-xs tracking-wider px-3.5 py-1 rounded-full mb-2">{children}</span>
 )
 
 const TipBox = ({ children }: { children: React.ReactNode }) => (
   <div className="bg-[#f5f0e8] border-l-[3px] border-[var(--accent)] rounded-r-lg p-3.5 my-3 text-sm text-[var(--text-secondary)]">
     <span className="text-base mr-1">💡</span>{children}
   </div>
 )
 
 const WarnBox = ({ children }: { children: React.ReactNode }) => (
   <div className="bg-[#fdf0ed] border-l-[3px] border-[#c4735a] rounded-r-lg p-3.5 my-3 text-sm text-[var(--text-secondary)]">
     <span className="text-base mr-1">⚠️</span>{children}
   </div>
 )
 
 const RoomCard = ({ num, title, children }: { num: string; title: string; children: React.ReactNode }) => (
   <div className="bg-white border border-[var(--border)] rounded-xl p-5 mb-4">
     <h3 className="flex items-center gap-2 text-base font-serif font-semibold text-[var(--text)] mb-3">
       <span className="bg-[var(--accent)] text-[var(--primary)] w-7 h-7 rounded-full inline-flex items-center justify-center text-sm font-bold shrink-0">{num}</span>
       {title}
     </h3>
     {children}
   </div>
 )
 
 const PhotoReq = ({ children }: { children: React.ReactNode }) => (
   <div className="bg-[#f5f0e8] border-l-[3px] border-[var(--accent)] rounded-r-lg p-3 my-2 text-sm text-[var(--text-secondary)]">
     {children}
   </div>
 )
 
 const Checklist = ({ title, items }: { title?: string; items: string[] }) => (
   <div className="bg-white border border-[var(--border)] rounded-xl p-4 my-3">
     {title && <h4 className="font-serif font-semibold text-[var(--text)] mb-2">{title}</h4>}
     <ul className="space-y-1.5">
       {items.map((item, i) => (
         <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
           <span className="text-[var(--accent)] text-base shrink-0 mt-0.5">☐</span>
           {item}
         </li>
       ))}
     </ul>
   </div>
 )
 
 const NamingCode = ({ children }: { children: React.ReactNode }) => (
   <code className="font-mono text-xs bg-[#f5f0e8] text-[var(--primary)] px-1.5 py-0.5 rounded">{children}</code>
 )
 
 export default function PhotoGuide() {
   return (
     <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans leading-relaxed">
       {/* Nav */}
       <nav className="sticky top-0 z-50 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] py-4">
         <div className="max-w-[860px] mx-auto px-6 flex items-center justify-between">
           <Link href="/" className="flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors">
             <ArrowLeft size={16} />
             Back to Home
           </Link>
           <span className="font-serif text-lg font-bold text-[var(--primary)]">
             Eastern<span className="text-[var(--accent)]">Flow</span>
           </span>
         </div>
       </nav>
 
       <main className="max-w-[800px] mx-auto px-6 py-10">
         {/* Header */}
         <div className="text-center mb-10">
           <h1 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text)] mb-2">
             Home Energy Assessment
           </h1>
           <p className="text-[var(--text-secondary)] italic text-base">
             Photo & Information Guide — Everything you need to prepare for your consultation
           </p>
         </div>
 
         {/* Table of Contents */}
         <div className="bg-white border border-[var(--border)] rounded-xl p-5 mb-10">
           <strong className="text-[var(--text)]">What&apos;s in this guide:</strong>
           <ol className="mt-2 space-y-1 pl-5 text-sm text-[var(--text-secondary)]">
             <li><a href="#overview" className="text-[var(--primary)] hover:underline">Overview — What You&apos;ll Need</a></li>
             <li><a href="#step1" className="text-[var(--primary)] hover:underline">Step 1: Fill Out the Intake Form</a></li>
             <li><a href="#step2" className="text-[var(--primary)] hover:underline">Step 2: Create a Simple Floor Plan</a></li>
             <li><a href="#step3" className="text-[var(--primary)] hover:underline">Step 3: Photograph Your Home</a></li>
             <li><a href="#step4" className="text-[var(--primary)] hover:underline">Step 4: Record a 2-Minute Video Walkthrough</a></li>
             <li><a href="#step5" className="text-[var(--primary)] hover:underline">Step 5: Submit Everything</a></li>
             <li><a href="#next" className="text-[var(--primary)] hover:underline">What Happens Next</a></li>
             <li><a href="#checklist" className="text-[var(--primary)] hover:underline">Quick Checklist</a></li>
           </ol>
         </div>
 
         {/* Overview */}
         <section id="overview" className="mb-12 scroll-mt-20">
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--accent)] pb-2">Overview — What You&apos;ll Need</h2>
           <p className="text-[var(--text-secondary)] mb-4">
             Thank you for booking your Home Energy Assessment. To give you the most accurate and personalized reading, I need to understand your space — even though we&apos;re not meeting in person.
           </p>
           <p className="text-[var(--text-secondary)] mb-4">
             Here&apos;s what you&apos;ll prepare (estimated time: <strong className="text-[var(--text)]">30–45 minutes</strong>):
           </p>
           <div className="overflow-x-auto">
             <table className="w-full border-collapse text-sm mb-4">
               <thead>
                 <tr className="bg-[#f5f0e8]">
                   <th className="border border-[var(--border)] p-2.5 text-left font-semibold text-[var(--text)]">Item</th>
                   <th className="border border-[var(--border)] p-2.5 text-left font-semibold text-[var(--text)]">Time</th>
                   <th className="border border-[var(--border)] p-2.5 text-left font-semibold text-[var(--text)]">What it is</th>
                 </tr>
               </thead>
               <tbody>
                 <tr><td className="border border-[var(--border)] p-2.5">① Intake Form</td><td className="border border-[var(--border)] p-2.5">10 min</td><td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">A few questions about you and your space</td></tr>
                 <tr><td className="border border-[var(--border)] p-2.5">② Floor Plan</td><td className="border border-[var(--border)] p-2.5">10 min</td><td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">A simple sketch of your home&apos;s layout</td></tr>
                 <tr><td className="border border-[var(--border)] p-2.5">③ Photos</td><td className="border border-[var(--border)] p-2.5">15 min</td><td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">About 15–20 photos of key areas</td></tr>
                 <tr><td className="border border-[var(--border)] p-2.5">④ Video Walkthrough</td><td className="border border-[var(--border)] p-2.5">5 min</td><td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">A short phone video walking through your home</td></tr>
               </tbody>
             </table>
           </div>
           <TipBox>You don&apos;t need any special equipment. Your phone camera is perfect. No professional photography skills required — just follow this guide.</TipBox>
         </section>
 
         {/* Step 1 */}
         <section id="step1" className="mb-12 scroll-mt-20">
           <Badge>STEP 1</Badge>
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--border)] pb-2">Fill Out the Intake Form</h2>
           <p className="text-[var(--text-secondary)] mb-4">This form helps me understand your space, your goals, and what you&apos;d like to shift. Please answer as honestly and specifically as you can.</p>
 
           <div className="bg-white border border-[var(--border)] rounded-xl p-5 mb-4">
             <h3 className="font-serif font-semibold text-[var(--text)] mb-3">About You</h3>
             {["Full Name", "Email", "Birth Date (Month / Day / Year)", "Birth Time (HH:MM)"].map((label) => (
               <div key={label} className="mb-3">
                 <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">{label}</label>
                 <div className="border-b border-[var(--border)] py-1 text-sm text-[var(--text-light)]">________________________</div>
               </div>
             ))}
           </div>
 
           <div className="bg-white border border-[var(--border)] rounded-xl p-5 mb-4">
             <h3 className="font-serif font-semibold text-[var(--text)] mb-3">About Your Home</h3>
             <div className="mb-3">
               <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Property Type</label>
               <div className="text-sm text-[var(--text-secondary)]">☐ House &nbsp;&nbsp; ☐ Apartment &nbsp;&nbsp; ☐ Condo &nbsp;&nbsp; ☐ Townhouse &nbsp;&nbsp; ☐ Other: ___________</div>
             </div>
             <div className="mb-3">
               <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Approximate Square Footage</label>
               <div className="border-b border-[var(--border)] py-1 text-sm text-[var(--text-light)]">________________________</div>
             </div>
             <div className="mb-3">
               <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">Full Address (used only for compass direction mapping)</label>
               <div className="border-b border-[var(--border)] py-1 text-sm text-[var(--text-light)]">________________________</div>
               <p className="text-xs text-[var(--text-light)] italic mt-1">We will never share your address. If you already know which direction your home faces, you do not need to provide it.</p>
             </div>
           </div>
 
           <div className="bg-white border border-[var(--border)] rounded-xl p-5 mb-4">
             <h3 className="font-serif font-semibold text-[var(--text)] mb-3">Your Goals &amp; Concerns</h3>
             <p className="text-xs font-semibold text-[var(--text-secondary)] mb-2">What areas of your life would you like to improve?</p>
             <div className="text-sm text-[var(--text-secondary)] mb-3">☐ Wealth &amp; Finances &nbsp;&nbsp; ☐ Career &nbsp;&nbsp; ☐ Relationships &nbsp;&nbsp; ☐ Health &nbsp;&nbsp; ☐ Sleep &nbsp;&nbsp; ☐ Family Harmony &nbsp;&nbsp; ☐ Personal Growth &nbsp;&nbsp; ☐ Other</div>
             <div className="mb-3">
               <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">What specific challenges are you currently facing?</label>
               <div className="border-b border-[var(--border)] py-1 text-sm text-[var(--text-light)]">________________________</div>
               <div className="border-b border-[var(--border)] py-1 text-sm text-[var(--text-light)]">________________________</div>
             </div>
           </div>
         </section>
 
         {/* Step 2 */}
         <section id="step2" className="mb-12 scroll-mt-20">
           <Badge>STEP 2</Badge>
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--border)] pb-2">Create a Simple Floor Plan</h2>
           <p className="text-[var(--text-secondary)] mb-4">I need a basic layout of your home to understand how energy flows through the space. <strong className="text-[var(--text)]">You do not need a professional floor plan.</strong> A hand-drawn sketch is perfect.</p>
 
           <Checklist title="What to Include" items={[
             "The shape of your home (rectangle, L-shape, irregular)",
             "All rooms labeled (living room, kitchen, bedroom 1, etc.)",
             "All doors — mark where they are and which way they swing",
             "All windows — mark their positions on the walls",
             "Key furniture: bed(s), stove, desk(s), sofa, dining table",
             "The front door — clearly label it \"FRONT DOOR\"",
             "Any stairs, balconies, or outdoor areas",
           ]} />
 
           {/* Floor Plan Diagram */}
           <div className="bg-white border border-dashed border-[var(--accent)] rounded-xl p-4 my-4 text-center">
             <svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto mx-auto">
               <rect x="40" y="30" width="420" height="280" fill="#faf6ef" stroke="#5c4a3d" strokeWidth="2.5" rx="4"/>
               <line x1="40" y1="160" x2="230" y2="160" stroke="#8a7a68" strokeWidth="1.5"/>
               <line x1="230" y1="30" x2="230" y2="310" stroke="#8a7a68" strokeWidth="1.5"/>
               <line x1="230" y1="190" x2="460" y2="190" stroke="#8a7a68" strokeWidth="1.5"/>
               <line x1="350" y1="190" x2="350" y2="310" stroke="#8a7a68" strokeWidth="1.5"/>
               <rect x="95" y="27" width="40" height="6" fill="#c4a870"/>
               <text x="115" y="22" fontSize="10" fill="#5c4a3d" textAnchor="middle" fontWeight="bold">FRONT DOOR</text>
               <path d="M 95 30 Q 115 50 135 30" fill="none" stroke="#c4a870" strokeWidth="1.5" strokeDasharray="3,2"/>
               <text x="135" y="95" fontSize="13" fill="#5c4a3d" textAnchor="middle" fontWeight="bold">Living Room</text>
               <text x="135" y="235" fontSize="13" fill="#5c4a3d" textAnchor="middle" fontWeight="bold">Kitchen</text>
               <text x="345" y="110" fontSize="13" fill="#5c4a3d" textAnchor="middle" fontWeight="bold">Master Bedroom</text>
               <text x="290" y="250" fontSize="11" fill="#5c4a3d" textAnchor="middle">Bath</text>
               <text x="405" y="250" fontSize="11" fill="#5c4a3d" textAnchor="middle">Bedroom 2</text>
               <rect x="40" y="80" width="4" height="30" fill="#a8c4d4"/>
               <rect x="40" y="220" width="4" height="30" fill="#a8c4d4"/>
               <rect x="456" y="80" width="4" height="40" fill="#a8c4d4"/>
               <rect x="280" y="27" width="30" height="4" fill="#a8c4d4"/>
               <rect x="380" y="27" width="30" height="4" fill="#a8c4d4"/>
               <rect x="180" y="306" width="30" height="4" fill="#a8c4d4"/>
               <rect x="390" y="306" width="30" height="4" fill="#a8c4d4"/>
               <rect x="260" y="120" width="50" height="35" fill="none" stroke="#c4735a" strokeWidth="1.5" rx="3"/>
               <text x="285" y="140" fontSize="9" fill="#c4735a" textAnchor="middle">BED</text>
               <rect x="50" y="200" width="30" height="20" fill="none" stroke="#c4735a" strokeWidth="1.5" rx="2"/>
               <text x="65" y="213" fontSize="8" fill="#c4735a" textAnchor="middle">STOVE</text>
               <rect x="60" y="60" width="70" height="20" fill="none" stroke="#c4735a" strokeWidth="1.5" rx="3"/>
               <text x="95" y="73" fontSize="8" fill="#c4735a" textAnchor="middle">SOFA</text>
               <rect x="390" y="130" width="50" height="20" fill="none" stroke="#c4735a" strokeWidth="1.5" rx="2"/>
               <text x="415" y="143" fontSize="8" fill="#c4735a" textAnchor="middle">DESK</text>
               <circle cx="470" cy="320" r="14" fill="none" stroke="#5c4a3d" strokeWidth="1"/>
               <path d="M 470 308 L 466 320 L 470 316 L 474 320 Z" fill="#5c4a3d"/>
               <text x="470" y="298" fontSize="9" fill="#5c4a3d" textAnchor="middle">N</text>
               <rect x="40" y="326" width="8" height="8" fill="#c4a870"/>
               <text x="54" y="333" fontSize="9" fill="#5c4a3d">Door</text>
               <rect x="90" y="326" width="8" height="8" fill="#a8c4d4"/>
               <text x="104" y="333" fontSize="9" fill="#5c4a3d">Window</text>
               <rect x="150" y="326" width="8" height="8" fill="none" stroke="#c4735a" strokeWidth="1.5"/>
               <text x="164" y="333" fontSize="9" fill="#5c4a3d">Furniture</text>
             </svg>
             <p className="text-xs text-[var(--text-light)] italic mt-2">Example floor plan — hand-drawn is fine, just make it readable like this</p>
           </div>
 
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
             <RoomCard num="A" title="Draw by Hand (Recommended)">
               <p className="text-sm text-[var(--text-secondary)] mb-2">Grab a piece of paper and a pen. Walk through your home and sketch the layout.</p>
               <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                 <li>• Which rooms are next to each other</li>
                 <li>• Where doors and windows are</li>
                 <li>• Where key furniture sits (bed, stove, sofa, desk)</li>
               </ul>
             </RoomCard>
             <RoomCard num="B" title="Use a Free Online Tool">
               <p className="text-sm text-[var(--text-secondary)]">If you prefer digital:</p>
               <p className="text-sm text-[var(--text-secondary)] mt-1">• <strong>Homestyler.com</strong> — Free, drag &amp; drop rooms</p>
               <p className="text-sm text-[var(--text-secondary)]">• <strong>Floorplanner.com</strong> — Free tier available</p>
             </RoomCard>
           </div>
 
           <WarnBox>If you already have a builder&apos;s floor plan or a real estate listing floor plan, just send that. No need to redraw.</WarnBox>
         </section>
 
         {/* Step 3 */}
         <section id="step3" className="mb-12 scroll-mt-20">
           <Badge>STEP 3</Badge>
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--border)] pb-2">Photograph Your Home</h2>
           <p className="text-[var(--text-secondary)] mb-4">This is the most important part. About <strong className="text-[var(--text)]">15–20 photos</strong> total.</p>
 
           <TipBox>
             <strong>Lighting:</strong> Take photos during the day. Open all curtains.<br />
             <strong>Angles:</strong> Hold your phone at chest height (about 4.5 ft). Keep it level.<br />
             <strong>Wide shots:</strong> Use 0.5x wide-angle if available.<br />
             <strong>Naming:</strong> Rename files: <NamingCode>01_frontdoor.jpg</NamingCode>, <NamingCode>02_livingroom.jpg</NamingCode>, etc.
           </TipBox>
 
           <RoomCard num="1" title="Front Door / Main Entrance (4 photos)">
             <PhotoReq>
               <strong>Photo 1:</strong> Stand outside, facing your front door.<br />
               <strong>Photo 2:</strong> Stand at the front door, looking inside.<br />
               <strong>Photo 3:</strong> Stand inside facing the front door.<br />
               <strong>Photo 4:</strong> The view from your front door looking outward.
             </PhotoReq>
           </RoomCard>
 
           <RoomCard num="2" title="Living Room (2–3 photos)">
             <PhotoReq>
               <strong>Photo 5:</strong> Stand in one corner, shoot diagonally across the room.<br />
               <strong>Photo 6:</strong> Opposite corner, shoot back.<br />
               <strong>Photo 7:</strong> If connected to dining, show both spaces.
             </PhotoReq>
             <TipBox><strong>Must be visible:</strong> Sofa position + window(s) in the same photo.</TipBox>
           </RoomCard>
 
           <RoomCard num="3" title="Kitchen (2 photos)">
             <PhotoReq>
               <strong>Photo 8:</strong> Full kitchen from the entrance. <strong>Stove</strong> must be visible.<br />
               <strong>Photo 9:</strong> Show the <strong>stove, sink, and refrigerator</strong> relationship.
             </PhotoReq>
           </RoomCard>
 
           <RoomCard num="4" title="Master Bedroom (2–3 photos)">
             <PhotoReq>
               <strong>Photo 10:</strong> From the doorway, full room. <strong>Bed</strong> fully visible.<br />
               <strong>Photo 11:</strong> <strong>Bed and window</strong> in the same frame.<br />
               <strong>Photo 12:</strong> If en-suite bathroom door or mirror faces the bed.
             </PhotoReq>
           </RoomCard>
 
           <RoomCard num="5" title="Bathroom(s) (1 photo each)">
             <PhotoReq>
               <strong>Photo 13+:</strong> From doorway. Show door position, toilet, mirror, shower/bath.
             </PhotoReq>
           </RoomCard>
 
           <RoomCard num="6" title="Additional Bedrooms / Home Office (1 photo each)">
             <PhotoReq>
               <strong>Photo 15+:</strong> From doorway. If there&apos;s a desk, show which direction it faces.
             </PhotoReq>
           </RoomCard>
 
           <RoomCard num="7" title="Dining Area (1 photo)">
             <PhotoReq>
               <strong>Photo 16:</strong> From a corner, showing table, chairs, and relation to kitchen/living room.
             </PhotoReq>
           </RoomCard>
 
           <RoomCard num="8" title="Exterior &amp; Surroundings (2–3 photos)">
             <PhotoReq>
               <strong>Photo 17:</strong> Front of building from across the street.<br />
               <strong>Photo 18:</strong> View from your main window looking outside.<br />
               <strong>Photo 19:</strong> Notable features near your home.
             </PhotoReq>
             <WarnBox>The environment outside your home affects energy flow just as much as the interior.</WarnBox>
           </RoomCard>
 
           <RoomCard num="9" title="Special Features (Optional)">
             <p className="text-sm text-[var(--text-secondary)] mb-2">If any of these apply, please photograph them:</p>
             <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
               <li>• Stairs (from the bottom looking up)</li>
               <li>• Mirrors facing the bed</li>
               <li>• Exposed ceiling beams over bed or sofa</li>
               <li>• Doors that face each other directly</li>
               <li>• Sharp wall corners pointing at bed, sofa, or dining table</li>
               <li>• Long narrow hallway with a door at the end</li>
               <li>• Any room that feels unusually dark, cold, or heavy</li>
             </ul>
           </RoomCard>
         </section>
 
         {/* Step 4 */}
         <section id="step4" className="mb-12 scroll-mt-20">
           <Badge>STEP 4</Badge>
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--border)] pb-2">Record a 2-Minute Video Walkthrough</h2>
           <p className="text-[var(--text-secondary)] mb-4">Photos give me the details. The video gives me the <strong className="text-[var(--text)]">flow</strong>.</p>
 
           <div className="bg-white border border-[var(--border)] rounded-xl p-5 mb-4">
             <h3 className="font-serif font-semibold text-[var(--text)] mb-3">How to Record</h3>
             <ol className="space-y-2 text-sm text-[var(--text-secondary)] pl-5 list-decimal">
               <li>Open your phone camera, switch to <strong>video mode</strong></li>
               <li>Hold the phone in <strong>landscape</strong> at chest height</li>
               <li>Start at your <strong>front door</strong></li>
               <li>Walk slowly: Front door → Living room → Kitchen → Dining → Bedrooms → Bathrooms</li>
               <li>At each room, pause for <strong>3–5 seconds</strong> and slowly pan left to right</li>
               <li>Walk at a slow, steady pace — one continuous take</li>
               <li>Total length: <strong>2–3 minutes</strong></li>
             </ol>
           </div>
           <TipBox>You don&apos;t need to talk. Just walk and pan. If you want to point something out, a quick comment is helpful but optional.</TipBox>
         </section>
 
         {/* Step 5 */}
         <section id="step5" className="mb-12 scroll-mt-20">
           <Badge>STEP 5</Badge>
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--border)] pb-2">Submit Everything</h2>
 
           <div className="overflow-x-auto mb-4">
             <table className="w-full border-collapse text-sm">
               <thead>
                 <tr className="bg-[#f5f0e8]">
                   <th className="border border-[var(--border)] p-2.5 text-left font-semibold">Method</th>
                   <th className="border border-[var(--border)] p-2.5 text-left font-semibold">How</th>
                   <th className="border border-[var(--border)] p-2.5 text-left font-semibold">Best for</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="border border-[var(--border)] p-2.5 font-semibold">Google Drive</td>
                   <td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">Upload to a folder, share link</td>
                   <td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">Large video files</td>
                 </tr>
                 <tr>
                   <td className="border border-[var(--border)] p-2.5 font-semibold">Email</td>
                   <td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">Attach photos + floor plan</td>
                   <td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">Quick submission</td>
                 </tr>
               </tbody>
             </table>
           </div>
 
           <div className="bg-white border border-[var(--border)] rounded-xl p-5">
             <h3 className="font-serif font-semibold text-[var(--text)] mb-3">File Naming Convention</h3>
             <div className="overflow-x-auto">
               <table className="w-full border-collapse text-sm">
                 <thead>
                   <tr className="bg-[#f5f0e8]">
                     <th className="border border-[var(--border)] p-2 text-left font-semibold">File</th>
                     <th className="border border-[var(--border)] p-2 text-left font-semibold">Name it</th>
                   </tr>
                 </thead>
                 <tbody>
                   {[
                     ["Intake form", "intake_form_[name].pdf"],
                     ["Floor plan", "floorplan_[name].jpg"],
                     ["Front door", "01_frontdoor_outside.jpg"],
                     ["Living room", "05_livingroom_angle1.jpg"],
                     ["Kitchen", "08_kitchen_full.jpg"],
                     ["Master bedroom", "10_bedroom_full.jpg"],
                     ["Exterior", "17_exterior_front.jpg"],
                     ["Video", "walkthrough_[name].mp4"],
                   ].map(([file, naming]) => (
                     <tr key={file}>
                       <td className="border border-[var(--border)] p-2">{file}</td>
                       <td className="border border-[var(--border)] p-2"><NamingCode>{naming}</NamingCode></td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
         </section>
 
         {/* What Happens Next */}
         <section id="next" className="mb-12 scroll-mt-20">
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--accent)] pb-2">What Happens Next</h2>
           <div className="bg-white border border-[var(--border)] rounded-xl p-5">
             <div className="overflow-x-auto">
               <table className="w-full border-collapse text-sm">
                 <thead>
                   <tr className="bg-[#f5f0e8]">
                     <th className="border border-[var(--border)] p-2.5 text-left font-semibold">Step</th>
                     <th className="border border-[var(--border)] p-2.5 text-left font-semibold">What happens</th>
                     <th className="border border-[var(--border)] p-2.5 text-left font-semibold">Timeframe</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td className="border border-[var(--border)] p-2.5 font-semibold">1. Review</td>
                     <td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">I study your floor plan, photos, video, and intake form</td>
                     <td className="border border-[var(--border)] p-2.5">2–3 days</td>
                   </tr>
                   <tr>
                     <td className="border border-[var(--border)] p-2.5 font-semibold">2. Analysis</td>
                     <td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">I map your home&apos;s energy flow and identify key areas</td>
                     <td className="border border-[var(--border)] p-2.5">2–3 days</td>
                   </tr>
                   <tr>
                     <td className="border border-[var(--border)] p-2.5 font-semibold">3. Written Summary</td>
                     <td className="border border-[var(--border)] p-2.5 text-[var(--text-secondary)]">PDF summary of all recommendations</td>
                     <td className="border border-[var(--border)] p-2.5">Within 48 hours</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <TipBox><strong>Questions?</strong> If anything is unclear, just email me. The better I can see your space, the better your reading will be.</TipBox>
         </section>
 
         {/* Checklist */}
         <section id="checklist" className="mb-12 scroll-mt-20">
           <h2 className="text-2xl font-serif font-bold text-[var(--text)] mb-4 border-b-2 border-[var(--accent)] pb-2">Quick Checklist</h2>
           <p className="text-sm text-[var(--text-secondary)] mb-4">Print this page or save it — check off each item as you complete it.</p>
 
           <Checklist title="☐ Intake Form Completed" items={[
             "Personal info (name, email, birth date, birth time)",
             "Property info (type, size, address, year)",
             "Household members listed",
             "Goals and concerns written",
           ]} />
 
           <Checklist title="☐ Floor Plan Created" items={[
             "All rooms labeled",
             "All doors marked (with swing direction)",
             "All windows marked",
             "Key furniture placed (bed, stove, sofa, desk)",
             "Front door clearly labeled",
             "Photo taken of the floor plan (if hand-drawn)",
           ]} />
 
           <Checklist title="☐ Photos Taken (15–20 total)" items={[
             "① Front door — 4 photos",
             "② Living room — 2 photos (both angles, sofa + window visible)",
             "③ Kitchen — 2 photos (full room + stove/sink/fridge)",
             "④ Master bedroom — 2 photos (full room + bed + window)",
             "⑤ Bathroom(s) — 1 photo each",
             "⑥ Other bedrooms/office — 1 photo each",
             "⑦ Dining area — 1 photo",
             "⑧ Exterior — 2–3 photos",
             "⑨ Special features — optional",
           ]} />
 
           <Checklist title="☐ Video Walkthrough Recorded" items={[
             "Landscape mode, chest height",
             "Starts at front door",
             "Walks through every room",
             "3–5 second pause + pan at each room",
             "2–3 minutes total",
           ]} />
 
           <Checklist title="☐ Files Named &amp; Submitted" items={[
             "All photos numbered in order (01_, 02_, 03_...)",
             "Floor plan photo included",
             "Video file included",
             "Intake form completed",
             "All files uploaded to cloud drive or emailed",
           ]} />
         </section>
 
         {/* Footer */}
         <div className="text-center text-xs text-[var(--text-light)] mt-10 pt-4 border-t border-[var(--border)]">
           Eastern Flow — Home Energy Assessment | Photo &amp; Information Guide<br />
           Questions? <Link href="/#book" className="text-[var(--primary)] hover:underline">Book a consultation</Link>
         </div>
       </main>
     </div>
   )
 }
