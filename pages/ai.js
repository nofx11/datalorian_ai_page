import Head from "next/head";
import { useContext } from "react";
import { LanguageContext } from "./_app";

const translations = {
  pl: {
    title: "AI, ML & Data",
    blogTitle: "Blog: Jak AI zmienia systemy rekomendacji",
    blogText: "Systemy rekomendacyjne oparte na sztucznej inteligencji potrafią dynamicznie analizować zachowania użytkowników, dane o produktach oraz kontekst w czasie rzeczywistym. Dzięki modelom uczenia maszynowego możliwa jest hiperpersonalizacja, co znacząco zwiększa współczynniki konwersji w e-commerce.",
    whatAI: "Czym jest AI?",
    whatAIText: "Sztuczna inteligencja (AI) to dziedzina informatyki zajmująca się tworzeniem systemów zdolnych do wykonywania zadań wymagających inteligencji ludzkiej, takich jak rozumienie języka, rozpoznawanie obrazów czy podejmowanie decyzji.",
    whatML: "Czym jest Machine Learning?",
    whatMLText: "Uczenie maszynowe (ML) to poddziedzina AI, która polega na budowaniu modeli uczących się na podstawie danych. Algorytmy ML potrafią wykrywać wzorce i przewidywać przyszłe zdarzenia bez programowania reguł na sztywno.",
    whatData: "Data Science i dane",
    whatDataText: "Data Science to interdyscyplinarna dziedzina łącząca statystykę, informatykę i wiedzę domenową, której celem jest wydobywanie wartości z danych. Dane są paliwem dla AI i ML – im lepsze dane, tym lepsze modele.",
    examples: "Przykłady zastosowań AI/ML/Data",
    exampleList: [
      "Personalizowane rekomendacje w e-commerce",
      "Wykrywanie oszustw w bankowości",
      "Analiza obrazów medycznych",
      "Chatboty i asystenci głosowi",
      "Prognozowanie popytu i optymalizacja łańcucha dostaw",
    ],
    back: "Powrót na stronę główną",
  },
  en: {
    title: "AI, ML & Data",
    blogTitle: "Blog: How AI is Changing Recommendation Systems",
    blogText: "AI-powered recommendation systems dynamically analyze user behavior, product data, and context in real-time. Machine learning enables hyper-personalization, significantly improving conversion rates in e-commerce.",
    whatAI: "What is AI?",
    whatAIText: "Artificial Intelligence (AI) is a field of computer science focused on creating systems capable of performing tasks that require human intelligence, such as understanding language, recognizing images, or making decisions.",
    whatML: "What is Machine Learning?",
    whatMLText: "Machine Learning (ML) is a subfield of AI that involves building models that learn from data. ML algorithms can detect patterns and predict future events without hard-coded rules.",
    whatData: "Data Science and Data",
    whatDataText: "Data Science is an interdisciplinary field combining statistics, computer science, and domain knowledge to extract value from data. Data is the fuel for AI and ML – the better the data, the better the models.",
    examples: "Examples of AI/ML/Data Applications",
    exampleList: [
      "Personalized recommendations in e-commerce",
      "Fraud detection in banking",
      "Medical image analysis",
      "Chatbots and voice assistants",
      "Demand forecasting and supply chain optimization",
    ],
    back: "Back to homepage",
  },
};

export default function AI() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang];
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans flex flex-col items-center justify-center p-6 relative">
      <Head>
        <title>{t.title} | Datalorian AI</title>
      </Head>
      <div className="absolute top-4 right-4 space-x-4">
        <button className="lang-btn" onClick={() => setLang('pl')}>PL</button>
        <button className="lang-btn" onClick={() => setLang('en')}>EN</button>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{fontFamily: 'Orbitron, Arial, sans-serif'}}>{t.title}</h1>
      <section className="max-w-2xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t.blogTitle}</h2>
        <p className="text-gray-100 mb-6">{t.blogText}</p>
      </section>
      <section className="max-w-2xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t.whatAI}</h2>
        <p className="text-gray-100 mb-4">{t.whatAIText}</p>
        <h2 className="text-2xl font-semibold mb-2">{t.whatML}</h2>
        <p className="text-gray-100 mb-4">{t.whatMLText}</p>
        <h2 className="text-2xl font-semibold mb-2">{t.whatData}</h2>
        <p className="text-gray-100 mb-4">{t.whatDataText}</p>
        <h2 className="text-2xl font-semibold mb-2">{t.examples}</h2>
        <ul className="list-disc list-inside text-gray-100 mb-4">
          {t.exampleList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </section>
      <a href="/" className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">{t.back}</a>
    </div>
  );
} 