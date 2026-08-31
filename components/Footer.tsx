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

        {/* ===== 社媒链接：TikTok & YouTube（把两处链接换成你自己的） ===== */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <a
            href="https://www.tiktok.com/@jason.l.spatial.aura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-10 h-10 rounded-full border border-white/25 text-white/70 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)] hover:border-[var(--accent)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]" aria-hidden="true">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@FengShui-SpatialAura"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full border border-white/25 text-white/70 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:text-[var(--accent)] hover:border-[var(--accent)]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[17px] h-[17px]" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        <div className="max-w-[600px] mx-auto text-xs opacity-50 mt-5">
          Feng Shui consultations are provided for environmental and spatial guidance purposes. Results vary by individual and space. This service does not guarantee specific financial, health, or relationship outcomes. &copy; 2026 Eastern Flow Feng Shui. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
