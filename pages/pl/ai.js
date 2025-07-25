import Head from "next/head";

export default function AI() {
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans flex flex-col items-center justify-center p-6 relative">
      <Head>
        <title>AI, ML & Data | Datalorian AI</title>
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/ai" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/ai" />
      </Head>
      <div className="absolute top-4 right-4 space-x-4">
        <a href="/en/ai" className="lang-btn">EN</a>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{fontFamily: 'Orbitron, Arial, sans-serif'}}>AI, ML & Data</h1>
      <section className="max-w-2xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-2">Blog: Jak AI zmienia systemy rekomendacji</h2>
        <p className="text-gray-100 mb-6">Systemy rekomendacyjne oparte na sztucznej inteligencji potrafią dynamicznie analizować zachowania użytkowników, dane o produktach oraz kontekst w czasie rzeczywistym. Dzięki modelom uczenia maszynowego możliwa jest hiperpersonalizacja, co znacząco zwiększa współczynniki konwersji w e-commerce.</p>
      </section>
      <section className="max-w-2xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-2">Czym jest AI?</h2>
        <p className="text-gray-100 mb-4">Sztuczna inteligencja (AI) to dziedzina informatyki zajmująca się tworzeniem systemów zdolnych do wykonywania zadań wymagających inteligencji ludzkiej, takich jak rozumienie języka, rozpoznawanie obrazów czy podejmowanie decyzji.</p>
        <h2 className="text-2xl font-semibold mb-2">Czym jest Machine Learning?</h2>
        <p className="text-gray-100 mb-4">Uczenie maszynowe (ML) to poddziedzina AI, która polega na budowaniu modeli uczących się na podstawie danych. Algorytmy ML potrafią wykrywać wzorce i przewidywać przyszłe zdarzenia bez programowania reguł na sztywno.</p>
        <h2 className="text-2xl font-semibold mb-2">Data Science i dane</h2>
        <p className="text-gray-100 mb-4">Data Science to interdyscyplinarna dziedzina łącząca statystykę, informatykę i wiedzę domenową, której celem jest wydobywanie wartości z danych. Dane są paliwem dla AI i ML – im lepsze dane, tym lepsze modele.</p>
        <h2 className="text-2xl font-semibold mb-2">Przykłady zastosowań AI/ML/Data</h2>
        <ul className="list-disc list-inside text-gray-100 mb-4">
          <li>Personalizowane rekomendacje w e-commerce</li>
          <li>Wykrywanie oszustw w bankowości</li>
          <li>Analiza obrazów medycznych</li>
          <li>Chatboty i asystenci głosowi</li>
          <li>Prognozowanie popytu i optymalizacja łańcucha dostaw</li>
        </ul>
      </section>
      <a href="/pl" className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">Powrót na stronę główną</a>
    </div>
  );
} 