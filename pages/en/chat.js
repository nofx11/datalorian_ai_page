import Head from "next/head";

export default function Chat() {
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white font-sans flex flex-col items-center justify-center p-6 relative">
      <Head>
        <title>Chat with the founder of Datalorian AI | Datalorian AI</title>
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/chat" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/chat" />
      </Head>
      <div className="absolute top-4 right-4 space-x-4">
        <a href="/pl/chat" className="lang-btn">PL</a>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{fontFamily: 'Orbitron, Arial, sans-serif'}}>Chat with the founder of Datalorian AI</h1>
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
      <a href="/en" className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">Back to homepage</a>
    </div>
  );
} 