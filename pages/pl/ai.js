import Head from "next/head";
import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function AI() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Generate floating particles
  const particles = Array.from({ length: 50 }).map((_, i) => {
    const delay = Math.random() * 8;
    const duration = 8 + Math.random() * 7;
    return (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-x-hidden pt-16">
      <Head>
        <title>AI, ML & Data | Datalorian AI</title>
        <meta
          name="description"
          content="Dowiedz się więcej o sztucznej inteligencji, uczeniu maszynowym i analizie danych na stronie Datalorian AI."
        />
        <meta property="og:title" content="AI, ML & Data | Datalorian AI" />
        <meta
          property="og:description"
          content="Dowiedz się więcej o sztucznej inteligencji, uczeniu maszynowym i analizie danych na stronie Datalorian AI."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/ai" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/ai" />
      </Head>

      {/* Animated background */}
      <div className="animated-bg" />

      {/* Floating particles */}
      <div className="particles">{particles}</div>

      {/* Navigation */}
      <nav
        className={`nav-container ${isScrolled ? 'scrolled' : ''}`}
        style={{ position: 'fixed', top: 0, width: '100%' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/pl" className="text-xl font-bold nav-logo">
                Datalorian AI
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="/pl/chat" className="nav-link">
                  Porozmawiajmy
                </a>
                <a href="/pl/ai" className="nav-link">
                  Dowiedz się więcej
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="lang-selector">
                <button
                  className="lang-btn"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  PL
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDropdown && (
                  <div className="lang-dropdown">
                    <button
                      className="lang-option"
                      onClick={() => {
                        document.cookie = 'lang=en; path=/; max-age=31536000';
                        window.location.href = '/en/ai';
                      }}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content animate-fade-in-up">
          <h1 className="hero-title glow-text">AI, ML & Data</h1>
          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Odkryj świat sztucznej inteligencji, uczenia maszynowego i analizy danych w przystępny i praktyczny
            sposób.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="space-y-8">
          {/* Featured Article */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Jak AI zmienia systemy rekomendacji</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Systemy rekomendacyjne oparte na sztucznej inteligencji potrafią dynamicznie analizować zachowania
              użytkowników, dane o produktach oraz kontekst w czasie rzeczywistym. Dzięki modelom uczenia
              maszynowego możliwa jest hiperpersonalizacja, co znacząco zwiększa współczynniki konwersji w
              e-commerce.
            </p>
          </div>

          {/* AI Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Czym jest AI?</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Sztuczna inteligencja (AI) to dziedzina informatyki zajmująca się tworzeniem systemów zdolnych do
              wykonywania zadań wymagających inteligencji ludzkiej, takich jak rozumienie języka, rozpoznawanie
              obrazów czy podejmowanie decyzji.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              AI znajduje zastosowanie w wielu branżach: od medycyny, przez finanse, po rozrywkę. Przykłady to
              systemy rozpoznawania mowy, autonomiczne pojazdy, tłumacze maszynowe czy personalizowane rekomendacje
              w e-commerce.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Współczesne AI opiera się na dużych zbiorach danych i zaawansowanych algorytmach, które pozwalają
              maszynom uczyć się na podstawie doświadczenia i przewidywać przyszłe zdarzenia.
            </p>
          </div>

          {/* ML Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Czym jest Machine Learning?</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Uczenie maszynowe (ML) to poddziedzina AI, która polega na budowaniu modeli uczących się na podstawie
              danych. Algorytmy ML potrafią wykrywać wzorce i przewidywać przyszłe zdarzenia bez programowania
              reguł na sztywno.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              ML jest wykorzystywane m.in. do analizy obrazów medycznych, detekcji oszustw w bankowości,
              prognozowania popytu czy automatycznego tagowania zdjęć w mediach społecznościowych.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Najpopularniejsze techniki ML to uczenie nadzorowane, nienadzorowane oraz uczenie przez
              wzmacnianie. Każda z nich znajduje zastosowanie w innych typach problemów.
            </p>
          </div>

          {/* Data Science Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Data Science i dane</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Data Science to interdyscyplinarna dziedzina łącząca statystykę, informatykę i wiedzę domenową,
              której celem jest wydobywanie wartości z danych. Dane są paliwem dla AI i ML – im lepsze dane, tym
              lepsze modele.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Proces Data Science obejmuje zbieranie, czyszczenie, analizę i wizualizację danych, a także
              wdrażanie modeli predykcyjnych w praktyce biznesowej.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              W erze Big Data rośnie znaczenie narzędzi do przetwarzania ogromnych wolumenów informacji, takich
              jak Hadoop, Spark czy chmura obliczeniowa.
            </p>
          </div>

          {/* Applications Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Przykłady zastosowań AI/ML/Data</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="social-links">
            <a
              href="https://x.com/DatalorianAI"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.89 3.549a1.25 1.25 0 0 0-1.77 0l-5.12 5.12-5.12-5.12a1.25 1.25 0 1 0-1.77 1.77l5.12 5.12-5.12 5.12a1.25 1.25 0 1 0 1.77 1.77l5.12-5.12 5.12 5.12a1.25 1.25 0 1 0 1.77-1.77l-5.12-5.12 5.12-5.12a1.25 1.25 0 0 0 0-1.77z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/datalorianai/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"
                />
              </svg>
            </a>
            <a href="mailto:datalorian.ai@gmail.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.25.5a.75.75 0 0 0-.75.75v.638l8.25 5.5 8.25-5.5V5.75a.75.75 0 0 0-.75-.75h-15Zm15.75 2.862-7.7 5.134a.75.75 0 0 1-.83 0L3.5 7.862V19.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.862Z"
                />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2025 Datalorian AI — powered by space-grade intelligence.</p>
        </div>
      </footer>
    </div>
  );
}