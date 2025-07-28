import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";
import React, { useState, useEffect } from "react";

export default function Home() {
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
        <title>Datalorian AI</title>
        <meta
          name="description"
          content="Datalorian AI is a website with educational and informational content about artificial intelligence, machine learning, and data analysis."
        />
        <meta property="og:title" content="Datalorian AI" />
        <meta
          property="og:description"
          content="Datalorian AI is a website with educational and informational content about artificial intelligence, machine learning, and data analysis."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/" />
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
              <a href="/en" className="text-xl font-bold nav-logo">
                Datalorian AI
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="/en/chat" className="nav-link">
                  Let's Chat
                </a>
                <a href="/en/ai" className="nav-link">
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="lang-selector">
                <button
                  className="lang-btn"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  EN
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDropdown && (
                  <div className="lang-dropdown">
                    <a href="/pl" className="lang-option">
                      PL
                    </a>
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
          <div className="mb-8">
            <Image
              src={logo}
              alt="Datalorian AI logo"
              width={300}
              height={120}
              className="mx-auto mb-6 rounded-2xl glow-border"
            />
          </div>

          <h1 className="hero-title glow-text">Datalorian AI</h1>

          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the world of modern technologies, explore practical applications of AI and ML, and get inspired by
            examples from various industries.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="/en/chat" className="btn-primary">
              Let's Chat
            </a>
            <a href="/en/ai" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">About Datalorian AI</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Datalorian AI is a website with informational and educational content about artificial intelligence (AI),
              machine learning (ML), and data analysis (Data Science).
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our goal is to share knowledge in an accessible way – both for beginners and advanced users.
            </p>
            <p className="text-violet-400 font-semibold text-lg animate-pulse-slow">More content coming soon!</p>
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