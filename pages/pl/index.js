import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans relative overflow-hidden">
      <Head>
        <title>Datalorian AI</title>
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/" />
      </Head>
      <header className="relative p-4 shadow-md bg-transparent z-10 flex flex-col items-center">
        <div className="absolute top-4 right-4 space-x-4">
          <a href="/en" className="lang-btn">EN</a>
        </div>
        <div className="flex flex-col items-center w-full max-w-xl md:max-w-2xl mx-auto">
          <Image src={logo} alt="Datalorian AI logo" width={440} height={180} className="rounded-2xl shadow-lg" style={{objectFit:'contain', filter:'drop-shadow(0 0 6px #6366f1) drop-shadow(0 0 3px #fbbf24)'}} />
          <h1 className="text-2xl font-bold text-white mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] text-center font-sans" style={{fontFamily: 'Orbitron, Arial, sans-serif', textShadow: '0 2px 16px #000, 0 0px 2px #fff'}}> Datalorian AI</h1>
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