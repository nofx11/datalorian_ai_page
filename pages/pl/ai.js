import Head from "next/head";
import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function AI() {
  // Generowanie gwiazd jak na stronie głównej
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
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans flex flex-col items-center relative">
      <Head>
        <title>AI, ML & Data | Datalorian AI</title>
        <meta name="description" content="Dowiedz się więcej o sztucznej inteligencji, uczeniu maszynowym i analizie danych na stronie Datalorian AI." />
        <meta property="og:title" content="AI, ML & Data | Datalorian AI" />
        <meta property="og:description" content="Dowiedz się więcej o sztucznej inteligencji, uczeniu maszynowym i analizie danych na stronie Datalorian AI." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/ai" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/ai" />
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
      {/* Overlay pod sekcją tekstową */}
      <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'rgba(10,10,35,0.55)', zIndex:1, pointerEvents:'none'}} />
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
                href="/en/ai"
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
        <h1 className="text-2xl md:text-3xl font-bold" style={{fontFamily:'Inter, Arial, sans-serif',color:'#f3f4f6',textShadow:'none',margin:0}}>AI, ML & Data</h1>
      </div>
      <div style={{position:'relative', zIndex:2}}>
        <section className="max-w-2xl w-full mb-10 mt-8" style={{fontFamily: 'Inter, Arial, sans-serif', color:'#f3f4f6', textShadow:'none'}}>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">Jak AI zmienia systemy rekomendacji</h2>
          <p className="mb-6 text-lg text-gray-100">Systemy rekomendacyjne oparte na sztucznej inteligencji potrafią dynamicznie analizować zachowania użytkowników, dane o produktach oraz kontekst w czasie rzeczywistym. Dzięki modelom uczenia maszynowego możliwa jest hiperpersonalizacja, co znacząco zwiększa współczynniki konwersji w e-commerce.</p>
        </section>
        <section className="max-w-2xl w-full mb-10" style={{fontFamily: 'Inter, Arial, sans-serif', color:'#f3f4f6', textShadow:'none'}}>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">Czym jest AI?</h2>
          <p className="mb-4 text-lg text-gray-100">Sztuczna inteligencja (AI) to dziedzina informatyki zajmująca się tworzeniem systemów zdolnych do wykonywania zadań wymagających inteligencji ludzkiej, takich jak rozumienie języka, rozpoznawanie obrazów czy podejmowanie decyzji.</p>
          <p className="mb-4 text-lg text-gray-100">AI znajduje zastosowanie w wielu branżach: od medycyny, przez finanse, po rozrywkę. Przykłady to systemy rozpoznawania mowy, autonomiczne pojazdy, tłumacze maszynowe czy personalizowane rekomendacje w e-commerce.</p>
          <p className="mb-4 text-lg text-gray-100">Współczesne AI opiera się na dużych zbiorach danych i zaawansowanych algorytmach, które pozwalają maszynom uczyć się na podstawie doświadczenia i przewidywać przyszłe zdarzenia.</p>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">Czym jest Machine Learning?</h2>
          <p className="mb-4 text-lg text-gray-100">Uczenie maszynowe (ML) to poddziedzina AI, która polega na budowaniu modeli uczących się na podstawie danych. Algorytmy ML potrafią wykrywać wzorce i przewidywać przyszłe zdarzenia bez programowania reguł na sztywno.</p>
          <p className="mb-4 text-lg text-gray-100">ML jest wykorzystywane m.in. do analizy obrazów medycznych, detekcji oszustw w bankowości, prognozowania popytu czy automatycznego tagowania zdjęć w mediach społecznościowych.</p>
          <p className="mb-4 text-lg text-gray-100">Najpopularniejsze techniki ML to uczenie nadzorowane, nienadzorowane oraz uczenie przez wzmacnianie. Każda z nich znajduje zastosowanie w innych typach problemów.</p>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">Data Science i dane</h2>
          <p className="mb-4 text-lg text-gray-100">Data Science to interdyscyplinarna dziedzina łącząca statystykę, informatykę i wiedzę domenową, której celem jest wydobywanie wartości z danych. Dane są paliwem dla AI i ML – im lepsze dane, tym lepsze modele.</p>
          <p className="mb-4 text-lg text-gray-100">Proces Data Science obejmuje zbieranie, czyszczenie, analizę i wizualizację danych, a także wdrażanie modeli predykcyjnych w praktyce biznesowej.</p>
          <p className="mb-4 text-lg text-gray-100">W erze Big Data rośnie znaczenie narzędzi do przetwarzania ogromnych wolumenów informacji, takich jak Hadoop, Spark czy chmura obliczeniowa.</p>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">Przykłady zastosowań AI/ML/Data</h2>
          <ul className="list-disc list-inside mb-4 text-lg text-gray-100">
            <li>Personalizowane rekomendacje w e-commerce</li>
            <li>Wykrywanie oszustw w bankowości</li>
            <li>Analiza obrazów medycznych</li>
            <li>Chatboty i asystenci głosowi</li>
            <li>Prognozowanie popytu i optymalizacja łańcucha dostaw</li>
            <li>Systemy rozpoznawania twarzy i biometrii</li>
            <li>Automatyczne tłumaczenia i przetwarzanie języka naturalnego</li>
            <li>Inteligentne systemy transportowe i autonomiczne pojazdy</li>
            <li>Analiza sentymentu w mediach społecznościowych</li>
            <li>Wizualizacja danych i dashboardy biznesowe</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 