import '../styles/globals.css';
import { Orbitron } from 'next/font/google';
import Head from 'next/head';
import { createContext, useState } from 'react';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

export const LanguageContext = createContext({ lang: 'pl', setLang: () => {} });

export default function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('pl');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={orbitron.className}>
        <Component {...pageProps} />
      </div>
    </LanguageContext.Provider>
  );
} 