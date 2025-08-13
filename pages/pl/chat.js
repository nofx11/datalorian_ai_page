import Head from "next/head";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import NavBar from "../../components/NavBar";

export default function Chat() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Odniesienie do sekcji czatu, aby można było przewinąć do niej po kliknięciu nagłówka bohatera
  const chatRef = useRef(null);

  /**
   * Płynnie przewiń do sekcji czatu po kliknięciu nagłówka hero.
   */
const scrollToChat = () => {
  if (chatRef.current) {
    // Sprawdź czy to mobile (np. max-width 600px)
    const isMobile = window.innerWidth <= 600;
    const yOffset = isMobile ? 20 : -70; // mobile: -20, desktop: -70
    const y = chatRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  // Generowanie unoszących się cząstek
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
    <div className="min-h-screen bg-dark-bg text-primary relative overflow-x-hidden pt-16">
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

      {/* Animowane tło */}
      <div className="animated-bg" />

      {/* Unoszące się cząsteczki */}
      <div className="particles">
        {particles}
      </div>

      <NavBar locale="pl" context="chat" />

      {/* Sekcja hero */}
      <section className="hero-section">
        <div className="hero-content animate-fade-in-up">
          <h1
            className="hero-title glow-text cursor-pointer"
            onClick={scrollToChat}
          >
            Rozmowa z założycielem
          </h1>
          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Porozmawiaj z założycielem Datalorian AI lub AI chatbotem o sztucznej inteligencji,
            uczeniu maszynowym i analizie danych.
          </p>
        </div>
      </section>

      {/* Sekcja treści */}
      <section className="max-w-5xl mx-auto px-2 py-2 relative z-10">
        <div
          className="card animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
          ref={chatRef}
        >
          {/* <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Rozmowa z AI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Porozmawiaj z zaawansowanym chatbotem AI, który pomoże Ci zrozumieć świat sztucznej inteligencji
              i uczenia maszynowego.
            </p>
          </div> */}
          {/* Chatbot Hugging Face Gradio */}
          <div
            className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl chat-iframe"
            style={{ height: '660px' }}
          >
            <style>{`
              .chat-iframe { height: min(650px, 90vh); }
              .chat-iframe iframe { height: 100% !important; min-height: 100% !important; }
              @media (max-width: 1024px) {
                .chat-iframe { height: min(500px, 80vh) !important; }
              }
              @media (max-width: 600px) {
                .chat-iframe {
                  max-width: none !important;
                  width: 93vw !important;
                  left: 50% !important;
                  transform: translateX(-50%) !important;
                  position: relative !important;
                  height: 88vh !important;
                  margin: 0 !important;
                }
              }
            `}</style>
            <iframe
              src="https://nofx11-chat-with-founder.hf.space/?__theme=dark"
              title="AI Chatbot"
              width="100%"
              style={{
                border: 0,
                height: '100%',
                minHeight: '100%',
                width: '100%',
                maxWidth: '100%',
                display: 'block',
              }}
              allow="clipboard-write; microphone;"
              className="rounded-xl"
            />
          </div>
          {/* Usunięto przycisk powrotu na stronę główną */}
        </div>
      </section>

      {/* Stopka */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="social-links">
            <a href="https://x.com/DatalorianAI" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.89 3.549a1.25 1.25 0 0 0-1.77 0l-5.12 5.12-5.12-5.12a1.25 1.25 0 1 0-1.77 1.77l5.12 5.12-5.12 5.12a1.25 1.25 0 1 0 1.77 1.77l5.12-5.12 5.12 5.12a1.25 1.25 0 1 0 1.77-1.77l-5.12-5.12 5.12-5.12a1.25 1.25 0 0 0 0-1.77z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/datalorianai/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z" />
              </svg>
            </a>
            <a href="mailto:datalorian.ai@gmail.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.25.5a.75.75 0 0 0-.75.75v.638l8.25 5.5 8.25-5.5V5.75a.75.75 0 0 0-.75-.75h-15Zm15.75 2.862-7.7 5.134a.75.75 0 0 1-.83 0L3.5 7.862V19.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.862Z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Datalorian AI — powered by space-grade intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}