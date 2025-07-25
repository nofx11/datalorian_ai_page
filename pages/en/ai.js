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
        <a href="/pl/ai" className="lang-btn">PL</a>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{fontFamily: 'Orbitron, Arial, sans-serif'}}>AI, ML & Data</h1>
      <section className="max-w-2xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-2">Blog: How AI is Changing Recommendation Systems</h2>
        <p className="text-gray-100 mb-6">AI-powered recommendation systems dynamically analyze user behavior, product data, and context in real-time. Machine learning enables hyper-personalization, significantly improving conversion rates in e-commerce.</p>
      </section>
      <section className="max-w-2xl w-full mb-10">
        <h2 className="text-2xl font-semibold mb-2">What is AI?</h2>
        <p className="text-gray-100 mb-4">Artificial Intelligence (AI) is a field of computer science focused on creating systems capable of performing tasks that require human intelligence, such as understanding language, recognizing images, or making decisions.</p>
        <h2 className="text-2xl font-semibold mb-2">What is Machine Learning?</h2>
        <p className="text-gray-100 mb-4">Machine Learning (ML) is a subfield of AI that involves building models that learn from data. ML algorithms can detect patterns and predict future events without hard-coded rules.</p>
        <h2 className="text-2xl font-semibold mb-2">Data Science and Data</h2>
        <p className="text-gray-100 mb-4">Data Science is an interdisciplinary field combining statistics, computer science, and domain knowledge to extract value from data. Data is the fuel for AI and ML – the better the data, the better the models.</p>
        <h2 className="text-2xl font-semibold mb-2">Examples of AI/ML/Data Applications</h2>
        <ul className="list-disc list-inside text-gray-100 mb-4">
          <li>Personalized recommendations in e-commerce</li>
          <li>Fraud detection in banking</li>
          <li>Medical image analysis</li>
          <li>Chatbots and voice assistants</li>
          <li>Demand forecasting and supply chain optimization</li>
        </ul>
      </section>
      <a href="/en" className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold shadow-lg hover:from-blue-600 hover:to-blue-200 transition-colors duration-200 text-lg">Back to homepage</a>
    </div>
  );
} 