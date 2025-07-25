import Head from "next/head";
import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Chat() {
  useEffect(() => {
    const stars = document.querySelector('.stars');
    if (stars && stars.childElementCount === 0) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star' + (Math.random() > 0.7 ? ' parallax' : '');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = 0.5 + Math.random() * 0.5;
        star.style.width = star.style.height = (1 + Math.random() * 2) + 'px';
        stars.appendChild(star);
      }
    }
  }, []);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans flex flex-col relative">
      <Head>
        <title>Rozmowa z założycielem Datalorian AI | Datalorian AI</title>
        <meta name="description" content="Porozmawiaj z założycielem Datalorian AI lub AI chatbotem. Strona edukacyjna o AI, ML i Data Science." />
        <meta property="og:title" content="Rozmowa z założycielem Datalorian AI | Datalorian AI" />
        <meta property="og:description" content="Porozmawiaj z założycielem Datalorian AI lub AI chatbotem. Strona edukacyjna o AI, ML i Data Science." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/chat" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/chat" />
      </Head>
      {/* --- KOSMICZNE TŁO --- */}
      <div className="stars" />
      <svg className="nebula-bg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="nebula1" cx="60%" cy="40%" r="80%" fx="60%" fy="40%" gradientTransform="rotate(20)">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0a0a23" stopOpacity="0.0" />
          </radialGradient>
        </defs>
        <ellipse cx="900" cy="350" rx="420" ry="180" fill="url(#nebula1)" />
      </svg>
      {/* Parallax mgławica - dodatkowa warstwa */}
      <svg className="nebula-parallax" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="nebulaParallax1" cx="60%" cy="60%" r="80%" fx="60%" fy="60%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#0ea5e9" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0a0a23" stopOpacity="0.0" />
          </radialGradient>
        </defs>
        <ellipse cx="1000" cy="500" rx="420" ry="180" fill="url(#nebulaParallax1)" />
      </svg>
      {/* Ornamenty geometryczne w tle */}
      <svg className="bg-ornaments" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="700" r="120" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
        <circle cx="1200" cy="200" r="80" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="900" cy="450" r="200" stroke="#fbbf24" strokeWidth="1.1" fill="none" />
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#38bdf8" strokeWidth="1" strokeDasharray="12 8" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="#6366f1" strokeWidth="1" strokeDasharray="10 10" />
        <rect x="200" y="100" width="180" height="180" rx="36" stroke="#fbbf24" strokeWidth="1" fill="none" />
      </svg>
      {/* Sticky top bar z logo i wyborem języka w samym prawym górnym rogu */}
      <div style={{position:'sticky',top:0,zIndex:30,background:'rgba(10,10,35,0.92)',backdropFilter:'blur(6px)',boxShadow:'0 2px 12px #18184822'}} className="w-full flex items-center px-4 py-2 gap-4">
        <a href="/pl" aria-label="Powrót na stronę główną">
          <Image src={logo} alt="Datalorian AI logo" height={32} style={{objectFit:'contain',borderRadius:4,boxShadow:'none',height:32}} />
        </a>
        <a href="/pl/chat" className="lang-btn text-base font-bold ml-2">Porozmawiajmy</a>
        <a href="/pl/ai" className="lang-btn text-base font-bold ml-2">Dowiedz się więcej</a>
        <div className="flex-1" />
        <div className="relative">
          <button
            className="lang-btn flex items-center gap-2 px-3 py-1 text-base font-bold"
            onClick={() => setShowDropdown((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={showDropdown}
            style={{boxShadow:'none'}}
          >
            PL
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-24 bg-[#181848] rounded shadow-lg z-50 border border-blue-900">
              <a
                href="/en/chat"
                className="flex items-center px-3 py-2 hover:bg-blue-900/30 transition-colors text-base"
                onClick={() => setShowDropdown(false)}
              >
                EN
              </a>
            </div>
          )}
        </div>
      </div>
      {/* Wyśrodkowany tytuł pod sticky bar */}
      <div style={{marginTop: '24px', marginBottom: '24px', textAlign: 'center', position: 'relative', zIndex: 2}}>
        <h1 className="text-2xl md:text-3xl font-bold" style={{fontFamily:'Inter, Arial, sans-serif',color:'#f3f4f6',textShadow:'none',margin:0}}>Rozmowa z założycielem Datalorian AI</h1>
      </div>
      {/* Overlay pod sekcją tekstową */}
      <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'rgba(10,10,35,0.55)', zIndex:1, pointerEvents:'none'}} />
      <div style={{position:'relative', zIndex:2}}>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-4xl h-[700px] sm:h-[480px] xs:h-[280px] rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-900 mb-8">
            <iframe
              src="https://faizan481-ai-chatbot.hf.space/?__theme=system&deep_link=eHV42wZ7-zs"
              title="AI Chatbot"
              width="100%"
              height="100%"
              style={{border:0, width:'100%', height:'100%', minHeight:'100%', minWidth:'100%'}}
              allow="clipboard-write; microphone;"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="/pl" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-500 text-gray-100 font-bold hover:from-blue-700 hover:to-blue-300 transition-colors duration-200 text-lg" style={{fontFamily: 'Inter, Arial, sans-serif', textShadow:'none', boxShadow:'none'}}>Powrót na stronę główną</a>
        </div>
      </div>
    </div>
  );
} 