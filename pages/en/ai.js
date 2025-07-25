import Head from "next/head";
import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function AI() {
  // Star generation like on the homepage
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
        <meta name="description" content="Learn more about artificial intelligence, machine learning, and data science on Datalorian AI." />
        <meta property="og:title" content="AI, ML & Data | Datalorian AI" />
        <meta property="og:description" content="Learn more about artificial intelligence, machine learning, and data science on Datalorian AI." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/ai" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/ai" />
      </Head>
      {/* Sticky top bar with logo and language dropdown in the top right corner */}
      <div style={{position:'sticky',top:0,zIndex:30,background:'rgba(10,10,35,0.92)',backdropFilter:'blur(6px)',boxShadow:'0 2px 12px #18184822'}} className="w-full flex items-center px-4 py-2 gap-4">
        <a href="/en" aria-label="Back to homepage">
          <Image src={logo} alt="Datalorian AI logo" height={32} style={{objectFit:'contain',borderRadius:4,boxShadow:'none',height:32}} />
        </a>
        <a href="/en/chat" className="lang-btn text-base font-bold ml-2">Let's chat</a>
        <a href="/en/ai" className="lang-btn text-base font-bold ml-2">Learn more</a>
        <div className="flex-1" />
        <div className="relative">
          <button
            className="lang-btn flex items-center gap-2 px-3 py-1 text-base font-bold"
            onClick={() => setShowDropdown((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={showDropdown}
            style={{boxShadow:'none'}}
          >
            EN
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-24 bg-[#181848] rounded shadow-lg z-50 border border-blue-900">
              <a
                href="/pl/ai"
                className="flex items-center px-3 py-2 hover:bg-blue-900/30 transition-colors text-base"
                onClick={() => setShowDropdown(false)}
              >
                PL
              </a>
            </div>
          )}
        </div>
      </div>
      {/* Centered title below sticky bar */}
      <div style={{marginTop: '24px', marginBottom: '24px', textAlign: 'center', position: 'relative', zIndex: 2}}>
        <h1 className="text-2xl md:text-3xl font-bold" style={{fontFamily:'Inter, Arial, sans-serif',color:'#f3f4f6',textShadow:'none',margin:0}}>AI, ML & Data</h1>
      </div>
      {/* --- COSMIC BACKGROUND --- */}
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
      {/* Parallax nebula - extra layer */}
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
      {/* Geometric ornaments background */}
      <svg className="bg-ornaments" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="700" r="120" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
        <circle cx="1200" cy="200" r="80" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="900" cy="450" r="200" stroke="#fbbf24" strokeWidth="1.1" fill="none" />
        <line x1="0" y1="450" x2="1440" y2="450" stroke="#38bdf8" strokeWidth="1" strokeDasharray="12 8" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="#6366f1" strokeWidth="1" strokeDasharray="10 10" />
        <rect x="200" y="100" width="180" height="180" rx="36" stroke="#fbbf24" strokeWidth="1" fill="none" />
      </svg>
      {/* Overlay under text section */}
      <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'rgba(10,10,35,0.55)', zIndex:1, pointerEvents:'none'}} />
      <div style={{position:'relative', zIndex:2}}>
        <section className="max-w-2xl w-full mb-10 mt-8" style={{fontFamily: 'Inter, Arial, sans-serif', color:'#f3f4f6', textShadow:'none'}}>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">How AI is Changing Recommendation Systems</h2>
          <p className="mb-6 text-lg text-gray-100">AI-powered recommendation systems dynamically analyze user behavior, product data, and context in real-time. Machine learning enables hyper-personalization, significantly improving conversion rates in e-commerce.</p>
        </section>
        <section className="max-w-2xl w-full mb-10" style={{fontFamily: 'Inter, Arial, sans-serif', color:'#f3f4f6', textShadow:'none'}}>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">What is AI?</h2>
          <p className="mb-4 text-lg text-gray-100">Artificial Intelligence (AI) is a field of computer science focused on creating systems capable of performing tasks that require human intelligence, such as understanding language, recognizing images, or making decisions.</p>
          <p className="mb-4 text-lg text-gray-100">AI is used in many industries: from medicine and finance to entertainment. Examples include speech recognition systems, autonomous vehicles, machine translators, and personalized recommendations in e-commerce.</p>
          <p className="mb-4 text-lg text-gray-100">Modern AI relies on large datasets and advanced algorithms that allow machines to learn from experience and predict future events.</p>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">What is Machine Learning?</h2>
          <p className="mb-4 text-lg text-gray-100">Machine Learning (ML) is a subfield of AI that involves building models that learn from data. ML algorithms can detect patterns and predict future events without hard-coded rules.</p>
          <p className="mb-4 text-lg text-gray-100">ML is used for medical image analysis, fraud detection in banking, demand forecasting, and automatic photo tagging in social media, among others.</p>
          <p className="mb-4 text-lg text-gray-100">The most popular ML techniques are supervised learning, unsupervised learning, and reinforcement learning. Each is used for different types of problems.</p>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">Data Science and Data</h2>
          <p className="mb-4 text-lg text-gray-100">Data Science is an interdisciplinary field combining statistics, computer science, and domain knowledge to extract value from data. Data is the fuel for AI and ML – the better the data, the better the models.</p>
          <p className="mb-4 text-lg text-gray-100">The Data Science process includes collecting, cleaning, analyzing, and visualizing data, as well as deploying predictive models in business practice.</p>
          <p className="mb-4 text-lg text-gray-100">In the era of Big Data, tools for processing huge volumes of information, such as Hadoop, Spark, or cloud computing, are becoming increasingly important.</p>
          <h2 className="text-2xl font-semibold mb-2 text-gray-100">Examples of AI/ML/Data Applications</h2>
          <ul className="list-disc list-inside mb-4 text-lg text-gray-100">
            <li>Personalized recommendations in e-commerce</li>
            <li>Fraud detection in banking</li>
            <li>Medical image analysis</li>
            <li>Chatbots and voice assistants</li>
            <li>Demand forecasting and supply chain optimization</li>
            <li>Facial recognition and biometrics systems</li>
            <li>Automatic translation and natural language processing</li>
            <li>Intelligent transportation systems and autonomous vehicles</li>
            <li>Sentiment analysis in social media</li>
            <li>Data visualization and business dashboards</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 