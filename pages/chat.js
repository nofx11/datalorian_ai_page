import Head from "next/head";
import { useContext } from "react";
import { LanguageContext } from "./_app";

const translations = {
  pl: {
    title: "Rozmowa z założycielem Datalorian AI",
    back: "Powrót na stronę główną",
  },
  en: {
    title: "Chat with the founder of Datalorian AI",
    back: "Back to homepage",
  },
};

export default function Chat() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang];
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans flex flex-col items-center justify-center p-6 relative">
      <Head>
        <title>Rozmowa z założycielem Datalorian AI | Datalorian AI</title>
      </Head>
      <div className="absolute top-4 right-4 space-x-4">
        <button className="lang-btn" onClick={() => setLang('pl')}>PL</button>
        <button className="lang-btn" onClick={() => setLang('en')}>EN</button>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{fontFamily: 'Orbitron, Arial, sans-serif'}}>{t.title}</h1>
      <div className="w-full max-w-2xl h-[600px] rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-900 mb-8">
        <iframe
          src="https://faizan481-ai-chatbot.hf.space/?__theme=system&deep_link=eHV42wZ7-zs"
          title="AI Chatbot"
          width="100%"
          height="100%"
          style={{border:0, width:'100%', height:'100%'}}
          allow="clipboard-write; microphone;"
        />
      </div>
      <a href="/" className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">{t.back}</a>
    </div>
  );
} 