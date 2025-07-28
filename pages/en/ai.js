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
          content="Learn more about artificial intelligence, machine learning, and data analysis on Datalorian AI."
        />
        <meta property="og:title" content="AI, ML & Data | Datalorian AI" />
        <meta
          property="og:description"
          content="Learn more about artificial intelligence, machine learning, and data analysis on Datalorian AI."
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
                    <a href="/pl/ai" className="lang-option">
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
          <h1 className="hero-title glow-text">AI, ML & Data</h1>
          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the world of artificial intelligence, machine learning, and data analysis in an accessible and
            practical way.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="space-y-8">
          {/* Featured Article */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">How AI is Changing Recommendation Systems</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              AI-powered recommendation systems can dynamically analyze user behaviors, product data, and real-time
              context. Thanks to machine learning models, hyper-personalization is possible, which significantly
              increases conversion rates in e-commerce.
            </p>
          </div>

          {/* AI Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">What is AI?</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Artificial Intelligence (AI) is a branch of computer science that deals with creating systems capable of
              performing tasks that require human intelligence, such as understanding language, recognizing images, or
              making decisions.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              AI finds applications in many industries: from medicine, through finance, to entertainment. Examples
              include speech recognition systems, autonomous vehicles, machine translators, or personalized
              recommendations in e-commerce.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Modern AI is based on large datasets and advanced algorithms that allow machines to learn from experience
              and predict future events.
            </p>
          </div>

          {/* ML Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">What is Machine Learning?</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Machine Learning (ML) is a subfield of AI that involves building models that learn from data. ML
              algorithms can detect patterns and predict future events without hard-coding rules.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              ML is used, among others, for medical image analysis, fraud detection in banking, demand forecasting, or
              automatic photo tagging in social media.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The most popular ML techniques are supervised learning, unsupervised learning, and reinforcement learning.
              Each of them finds application in different types of problems.
            </p>
          </div>

          {/* Data Science Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Data Science and Data</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Data Science is an interdisciplinary field combining statistics, computer science, and domain knowledge,
              whose goal is to extract value from data. Data is the fuel for AI and ML – the better the data, the
              better the models.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              The Data Science process includes collecting, cleaning, analyzing, and visualizing data, as well as
              implementing predictive models in business practice.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              In the Big Data era, the importance of tools for processing huge volumes of information is growing, such
              as Hadoop, Spark, or cloud computing.
            </p>
          </div>

          {/* Applications Section */}
          <div className="card animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Examples of AI/ML/Data Applications</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
              <li>Personalized recommendations in e-commerce</li>
              <li>Fraud detection in banking</li>
              <li>Medical image analysis</li>
              <li>Chatbots and voice assistants</li>
              <li>Demand forecasting and supply chain optimization</li>
              <li>Facial recognition and biometric systems</li>
              <li>Automatic translation and natural language processing</li>
              <li>Intelligent transportation systems and autonomous vehicles</li>
              <li>Sentiment analysis in social media</li>
              <li>Data visualization and business dashboards</li>
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