import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";
import React, { useState } from "react";

export default function Home() {
  // Generowanie 100 losowych gwiazdek
  const stars = Array.from({ length: 100 }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 1.5 + Math.random() * 2;
    return (
      <div
        key={i}
        className={"star" + (i % 7 === 0 ? " parallax" : "")}
        style={{
          top: `${top}vh`,
          left: `${left}vw`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans relative overflow-hidden">
      <Head>
        <title>Datalorian AI</title>
        <meta name="description" content="Datalorian AI to strona z treściami edukacyjnymi i informacyjnymi o sztucznej inteligencji, uczeniu maszynowym i analizie danych." />
        <meta property="og:title" content="Datalorian AI" />
        <meta property="og:description" content="Datalorian AI to strona z treściami edukacyjnymi i informacyjnymi o sztucznej inteligencji, uczeniu maszynowym i analizie danych." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/" />
      </Head>
      {/* Ornamenty geometryczne w tle */}
      <svg className="bg-ornaments" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="700" r="120" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
        <circle cx="1200" cy="200" r="80" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="900" cy="450" r="200" stroke="#fbbf24" strokeWidth="1.1" fill="none" />
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#38bdf8" strokeWidth="1" strokeDasharray="12 8" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="#6366f1" strokeWidth="1" strokeDasharray="10 10" />
        <rect x="200" y="100" width="180" height="180" rx="36" stroke="#fbbf24" strokeWidth="1" fill="none" />
      </svg>
      {/* Warstwa animowanej mgławicy SVG */}
      <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none animate-pulse" style={{opacity:0.5}} viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="nebula1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#0ea5e9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0a0a23" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nebula2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0a0a23" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="900" cy="300" rx="400" ry="180" fill="url(#nebula1)">
          <animate attributeName="cx" values="900;1000;900" dur="12s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="400" cy="700" rx="300" ry="120" fill="url(#nebula2)">
          <animate attributeName="cy" values="700;750;700" dur="16s" repeatCount="indefinite" />
        </ellipse>
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
      {/* Planety SVG z animacją orbitalną - wersja ulepszona */}
      <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" style={{opacity:0.8}} viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Planeta 1 (niebieska) - idealne koło, efekt 3D, chmury i atmosfera */}
        <g>
          {/* Główna planeta jako koło z kulistym gradientem */}
          <circle cx="300" cy="200" r="40" fill="url(#planet1grad)" filter="url(#shadow1)" />
          {/* Atmosfera - okrągła */}
          <circle cx="300" cy="200" r="48" fill="url(#atmos1)" opacity="0.18" />
          {/* Cień z lewej strony */}
          <ellipse cx="270" cy="200" rx="18" ry="38" fill="url(#planet1shadow)" opacity="0.22" />
          {/* Nieregularne chmury jako path, dopasowane do koła */}
          <path d="M275 200 Q285 185 300 195 Q325 200 310 215 Q295 220 285 210 Z" fill="#fff" opacity="0.18" />
          <path d="M310 185 Q320 180 335 200 Q325 205 315 195 Z" fill="#e0f2fe" opacity="0.22" />
          <path d="M295 210 Q305 225 320 215 Q315 210 305 212 Z" fill="#bae6fd" opacity="0.16" />
        </g>
        {/* Planeta 2 z pierścieniem i atmosferą */}
        <g>
          {/* Pierścień - subtelniejszy */}
          <ellipse cx="1200" cy="500" rx="90" ry="18" fill="url(#ring2)" opacity="0.18" />
          {/* Główna planeta jako koło z kulistym gradientem */}
          <circle cx="1200" cy="500" r="60" fill="url(#planet2grad)" filter="url(#shadow2)" />
          {/* Atmosfera - okrągła, delikatna */}
          <circle cx="1200" cy="500" r="72" fill="url(#atmos2)" opacity="0.13" />
          {/* Cień z lewej strony */}
          <ellipse cx="1165" cy="500" rx="28" ry="55" fill="url(#planet2shadow)" opacity="0.18" />
          {/* Nieregularne chmury/plamy */}
          <path d="M1170 500 Q1185 480 1200 490 Q1225 500 1210 520 Q1195 525 1180 510 Z" fill="#fffbe6" opacity="0.13" />
          <path d="M1210 470 Q1220 465 1240 490 Q1230 500 1215 490 Z" fill="#fde68a" opacity="0.18" />
          <path d="M1190 520 Q1205 535 1220 525 Q1215 520 1200 522 Z" fill="#fbbf24" opacity="0.14" />
        </g>
        <defs>
          <radialGradient id="planet1grad" cx="60%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.98" />
            <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a0a23" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="atmos1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="planet2grad" cx="60%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fffbe6" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#fde68a" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a16207" stopOpacity="0.95" />
          </radialGradient>
          <radialGradient id="atmos2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring2" x1="1110" y1="520" x2="1290" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffbe6" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#fbbf24" stopOpacity="0.5" />
            <stop offset="1" stopColor="#f59e42" stopOpacity="0.7" />
          </linearGradient>
          <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0a0a23" floodOpacity="0.7" />
          </filter>
          <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#0a0a23" floodOpacity="0.7" />
          </filter>
          <linearGradient id="planet1shadow" x1="250" y1="200" x2="300" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0a0a23" stopOpacity="0.5" />
            <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="planet2shadow" x1="1135" y1="520" x2="1200" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a16207" stopOpacity="0.5" />
            <stop offset="1" stopColor="#fde68a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {/* Warstwa gwiazd */}
      <div className="stars">{stars}</div>
      {/* Sticky top bar z logo, nawigacją i wyborem języka */}
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
                href="/en"
                className="flex items-center px-3 py-2 hover:bg-blue-900/30 transition-colors text-base"
                onClick={() => setShowDropdown(false)}
              >
                EN
              </a>
            </div>
          )}
        </div>
      </div>
      <header className="relative p-4 shadow-md bg-transparent z-10 flex flex-col items-center">
        <div className="flex flex-col items-center w-full max-w-xl md:max-w-2xl mx-auto">
          <Image src={logo} alt="Datalorian AI logo" width={440} height={180} className="rounded-2xl shadow-lg" style={{objectFit:'contain', filter:'drop-shadow(0 0 6px #6366f1) drop-shadow(0 0 3px #fbbf24)'}} />
          <h1 className="text-2xl font-bold text-center font-sans" style={{fontFamily: 'Orbitron, Arial, sans-serif', color:'#f3f4f6', textShadow: '0 2px 16px #000, 0 0px 2px #fff', marginTop:'1.5rem'}}> Datalorian AI</h1>
        </div>
      </header>
      <div className="max-w-2xl mx-auto mt-8 mb-6 text-center">
        <p className="text-lg text-gray-100">
          Datalorian AI to strona z treściami informacyjnymi i edukacyjnymi na temat sztucznej inteligencji (AI), uczenia maszynowego (ML) oraz analizy danych (Data Science).
        </p>
        <p className="mt-2 text-gray-300">
          Odkrywaj świat nowoczesnych technologii, poznawaj praktyczne zastosowania AI i ML, inspiruj się przykładami z różnych branż. Naszym celem jest dzielenie się wiedzą w przystępny sposób – zarówno dla początkujących, jak i zaawansowanych.
        </p>
        <p className="mt-2 text-blue-400 font-semibold">Więcej treści już wkrótce!</p>
      </div>
      <main className="max-w-4xl mx-auto p-4 relative z-10">
        <div className="my-6 flex flex-col sm:flex-row gap-4 items-center">
          <a href="/pl/chat" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">Porozmawiajmy</a>
          <a href="/pl/ai" className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">Dowiedz się więcej</a>
        </div>
      </main>
      <footer className="text-center p-4 border-t mt-10 text-sm text-gray-200 relative z-10 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] flex flex-col items-center gap-2">
        <div className="flex justify-center gap-4 mb-1">
          <a href="https://x.com/DatalorianAI" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.89 3.549a1.25 1.25 0 0 0-1.77 0l-5.12 5.12-5.12-5.12a1.25 1.25 0 1 0-1.77 1.77l5.12 5.12-5.12 5.12a1.25 1.25 0 1 0 1.77 1.77l5.12-5.12 5.12 5.12a1.25 1.25 0 1 0 1.77-1.77l-5.12-5.12 5.12-5.12a1.25 1.25 0 0 0 0-1.77z" fill="currentColor"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/datalorianai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z" fill="currentColor"/></svg>
          </a>
          <a href="mailto:datalorian.ai@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:text-blue-400 transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.25.5a.75.75 0 0 0-.75.75v.638l8.25 5.5 8.25-5.5V5.75a.75.75 0 0 0-.75-.75h-15Zm15.75 2.862-7.7 5.134a.75.75 0 0 1-.83 0L3.5 7.862V19.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.862Z" fill="currentColor"/></svg>
          </a>
        </div>
        © 2025 Datalorian AI — powered by space-grade intelligence.
      </footer>
    </div>
  );
} 