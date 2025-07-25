import Head from "next/head";
import Image from "next/image";
import planet from "../public/logo.png";

export default function Space() {
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans flex flex-col items-center justify-center p-6">
      <Head>
        <title>Space Wonders | Datalorian AI</title>
      </Head>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{fontFamily: 'Orbitron, Arial, sans-serif'}}>Kosmiczne ciekawostki</h1>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <Image src={planet} alt="Planet" width={180} height={70} className="rounded-2xl shadow-lg" style={{objectFit:'contain', filter:'drop-shadow(0 0 6px #6366f1) drop-shadow(0 0 3px #fbbf24)'}} />
        <ul className="text-lg max-w-xl space-y-4">
          <li>🌌 Wszechświat ma ok. 13,8 miliarda lat.</li>
          <li>🪐 Największą planetą Układu Słonecznego jest Jowisz – zmieściłoby się w nim ponad 1300 Ziem!</li>
          <li>✨ W Drodze Mlecznej znajduje się ponad 100 miliardów gwiazd.</li>
          <li>🚀 Najszybszy stworzony przez człowieka obiekt to sonda Parker Solar Probe (ponad 690 000 km/h).</li>
          <li>🌍 Światło ze Słońca dociera do Ziemi w ok. 8 minut i 20 sekund.</li>
        </ul>
      </div>
      <a href="/" className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">Powrót na stronę główną</a>
    </div>
  );
} 