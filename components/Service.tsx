export default function Service() {
  return (
    <section className="py-20 bg-[var(--bg)]" id="service">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center text-xs tracking-[2px] uppercase text-[var(--accent)] mb-4 font-semibold">
          Choose Your Path
        </div>
        <h2 className="text-center text-3xl md:text-4xl mb-5 text-[var(--text)]">
          Three Ways to Work With Me
        </h2>
        <p className="text-center text-[17px] text-[var(--text-secondary)] max-w-[620px] mx-auto mb-[50px]">
          Whether you want a written reading of your cosmic blueprint, a remote home energy tune-up, or a hands-on in-person visit &mdash; there&apos;s an option that fits your situation.
        </p>

        {/* 响应式三列网格容器 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Soul Blueprint Reading */}
          <div className="bg-white rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="bg-[var(--primary)] text-white text-center px-6 py-5">
              <div className="text-[11px] uppercase tracking-[1.5px] opacity-80 mb-1">WRITTEN READING</div>
              <h3 className="font-serif text-xl font-medium leading-tight">Soul Blueprint Reading</h3>
              <div className="font-serif text-3xl mt-2 font-normal">$49</div>
              <div className="text-xs opacity-75 mt-1 leading-tight">One-time &middot; Delivered in 2&ndash;3 days</div>
            </div>
            <div className="p-8">
              <p className="text-[15px] text-[var(--text-secondary)] mb-6 leading-relaxed">
                A complete decoding of your birth chart &mdash; your timing, your talents, and the turning points coming up. Pure written insight, no phone call needed.
              </p>
              <ul className="list-none mb-6">
                <li className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Your Complete Soul Blueprint</strong> &mdash; Decode the timing of your breakthroughs, challenges, and golden opportunities.</span>
                </li>
                <li className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Your birth chart decoded</strong> &mdash; uncover your timing, talents, and turning points</span>
                </li>
                <li className="flex items-start gap-3 py-2.5 text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Written insight only</strong> &mdash; no phone call needed, delivered straight to your inbox</span>
                </li>
              </ul>
              <a href="#book" className="block w-full px-8 py-3.5 rounded-[50px] text-sm font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] transition-colors text-center">
                Book Your Reading
              </a>
            </div>
          </div>

          {/* Card 2: Home Energy Assessment */}
          <div className="bg-white rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="bg-[var(--primary)] text-white text-center px-6 py-5">
              <div className="text-[11px] uppercase tracking-[1.5px] opacity-80 mb-1">MOST COMPREHENSIVE</div>
              <h3 className="font-serif text-xl font-medium leading-tight">Full Home Energy Assessment</h3>
              <div className="font-serif text-3xl mt-2 font-normal">$197</div>
              <div className="text-xs opacity-75 mt-1 leading-tight">Remote assessment &middot; Floor plan analysis &middot; Written report included</div>
            </div>
            <div className="p-8">
              <ul className="list-none mb-6">
                <li className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Complete floor plan energy map</strong> &mdash; identifying blocked zones, draining areas, and wealth corners</span>
                </li>
                <li className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Personalized action plan</strong> &mdash; specific changes for your bedroom, kitchen, entrance, and workspace</span>
                </li>
                <li className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Written report</strong> &mdash; delivered within 48 hours, with diagrams and step-by-step instructions</span>
                </li>
                <li className="flex items-start gap-3 py-2.5 text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>No renovations required</strong> &mdash; most fixes involve repositioning, decluttering, and simple adjustments</span>
                </li>
              </ul>
              <a href="#book" className="block w-full px-8 py-3.5 rounded-[50px] text-sm font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] transition-colors text-center">
                Book Your Assessment
              </a>
            </div>
          </div>

          {/* Card 3: In-Person On-Site */}
          <div className="bg-white rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="bg-[var(--primary)] text-white text-center px-6 py-5">
              <div className="text-[11px] uppercase tracking-[1.5px] opacity-80 mb-1">PREMIUM &middot; BY APPOINTMENT</div>
              <h3 className="font-serif text-[17px] font-medium leading-snug">In-Person On-Site<br/>Home Energy Consulting</h3>
              <div className="font-serif text-2xl mt-2 font-normal whitespace-nowrap">Custom Quote</div>
              <div className="text-xs opacity-75 mt-1 leading-tight">Pricing depends on property size, location &amp; scope</div>
            </div>
            <div className="p-8">
              <p className="text-[15px] text-[var(--text-secondary)] mb-6 leading-relaxed">
                For homes that need a physical walkthrough. Some spaces only reveal themselves in person &mdash; multi-floor layouts, tricky exteriors, or waterfront properties.
              </p>
              <ul className="list-none mb-6">
                <li className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>On-site visit</strong> &mdash; I come to your property for a full walkthrough</span>
                </li>
                <li className="flex items-start gap-3 py-2.5 border-b border-[var(--border)] text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Property facing &amp; floor plan</strong> &mdash; exact measurements and compass analysis</span>
                </li>
                <li className="flex items-start gap-3 py-2.5 text-[15px]">
                  <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                  <span><strong>Detailed report &amp; recommendations</strong> &mdash; delivered within 48 hours</span>
                </li>
              </ul>
              <a href="/inquiry" className="block w-full px-8 py-3.5 rounded-[50px] text-sm font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-light)] transition-colors text-center">
                Request a Quote
              </a>
            </div>
          </div>

        </div>

        <div className="text-center mt-8">
          <a href="/guide" className="inline-block text-sm text-[var(--primary)] hover:text-[var(--primary-light)] underline underline-offset-2 transition-colors">
            View our Photo &amp; Information Guide &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
