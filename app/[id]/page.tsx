"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../PDFViewer"), { ssr: false });

export default function CertificatePage() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className="bg-[rgb(32,10,86)] h-[70px] flex items-center justify-center">
        <div className="w-full max-w-[1200px] flex items-center justify-between" style={{ paddingLeft: 'max(20px, 5vw)', paddingRight: 'max(20px, 5vw)' }}>
          <div className="flex items-center gap-[10px]">
            {/* 4 dots in 2x2 grid */}
            <div className="grid grid-cols-2 gap-[5px]">
              <div className="w-[16px] h-[16px] rounded-full bg-white" />
              <div className="w-[16px] h-[16px] rounded-full bg-white" />
              <div className="w-[16px] h-[16px] rounded-full bg-white" />
              <div className="w-[16px] h-[16px] rounded-full bg-white" />
            </div>
            <div className="text-white text-[13px] font-bold leading-[15px] tracking-[0.3px]">
              <div>BRITISH</div>
              <div>COUNCIL</div>
            </div>
          </div>
          <a href="https://v2.eu.accounts.accredible.com/login?app=recipient-portal&origin=https:%2F%2Fcredentials.britishcouncil.org%2F96552224-8538-427c-845b-8f26ecc895e8%3Fkey%3Dcee2777baba719db4332ddf0ce19ce88cda3b1abb310d927fd5808248018d84b" className="flex items-center gap-[10px] text-white cursor-pointer hover:opacity-80">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="white" strokeWidth="1.5" />
            </svg>
            <span className="text-[15px]">Sign in</span>
          </a>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex justify-center px-4 py-6 bg-[#e8e8e8]">
        <div className="relative w-full max-w-[850px]">
          
          {/* Private badge */}
          <div className="absolute top-8 -right-[140px] z-20">
            <div className="bg-[#f0f0f0] rounded-[8px] flex items-center gap-3 px-5 py-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d1d1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
              <span className="text-[17px] font-medium text-[#1d1d1b]">Private</span>
            </div>
          </div>

          {/* PDF Container */}
          <PDFViewer file="/BRITISH%20%2C%20%C3%A7ertifikate-ArditaKadija.pdf" />
        </div>
      </main>
    </div>
  );
}
