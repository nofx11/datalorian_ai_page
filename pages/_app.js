import '../styles/globals.css';
import { Orbitron } from 'next/font/google';
import Head from 'next/head';
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

export const LanguageContext = createContext({ lang: 'pl', setLang: () => {} });

export default function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('pl');
  const [loading, setLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const router = useRouter();

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
        <div style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(10,10,35,0.7)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{animation:'spin 1.2s linear infinite'}}>
            <g filter="url(#glow)">
              <circle cx="40" cy="40" r="24" stroke="#38bdf8" strokeWidth="4" fill="none" />
              <circle cx="40" cy="20" r="6" fill="#fbbf24" />
              <circle cx="60" cy="40" r="4" fill="#6366f1" />
              <circle cx="40" cy="60" r="3" fill="#38bdf8" />
              <circle cx="20" cy="40" r="2.5" fill="#fbbf24" />
            </g>
            <defs>
              <filter id="glow" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#6366f1" floodOpacity="0.7" />
              </filter>
            </defs>
          </svg>
          <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
        </div>
      )}
      <div className={orbitron.className}>
        <Component {...pageProps} />
        {showScroll && (
          <button
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
            style={{position:'fixed',right:'2vw',bottom:'3vh',zIndex:1000,background:'rgba(24,24,72,0.85)',border:'2px solid #6366f1',borderRadius:'50%',width:52,height:52,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 24px #6366f1cc',color:'#fff',fontSize:28,cursor:'pointer',transition:'background 0.2s'}}
            onMouseOver={e=>e.currentTarget.style.background='#6366f1'}
            onMouseOut={e=>e.currentTarget.style.background='rgba(24,24,72,0.85)'}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </button>
        )}
      </div>
    </LanguageContext.Provider>
  );
} 