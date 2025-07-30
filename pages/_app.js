import '../styles/globals.css';
import { Orbitron } from 'next/font/google';
import Head from 'next/head';
import { createContext, useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

export const LanguageContext = createContext({ lang: 'pl', setLang: () => {} });

export default function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('pl');
  const [loading, setLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const router = useRouter();

  // Precompute a set of meteors for the meteor shower. This uses useMemo to avoid
  // regenerating the array on every render.
  const meteors = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      const delay = Math.random() * 5;
      const duration = 4 + Math.random() * 3;
      const left = Math.random() * 100;
      // Vary the height of each meteor to create longer or shorter trails
      const height = 100 + Math.random() * 150;
      return (
        <div
          key={`meteor-${i}`}
          className="meteor"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && (
        <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(10,10,15,0.95)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className={orbitron.className}>
        <Component {...pageProps} />
        {/* Meteor shower effect */}
        <div className="meteors">{meteors}</div>
        {showScroll && (
          <button
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
            className="scroll-to-top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        )}
      </div>
    </LanguageContext.Provider>
  );
}