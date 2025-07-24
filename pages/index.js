import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white font-sans">
      <Head>
        <title>Datalorian AI</title>
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <header className="text-center mb-16">
          <img src="/logo.png" alt="Datalorian AI" className="h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Datalorian AI</h1>
          <p className="text-lg mt-2 text-indigo-200">
            Inteligentna platforma rekomendacyjna oparta na AI dla nowoczesnego e-commerce.
            Wykorzystujemy dane i modele sztucznej inteligencji, by zwiększać konwersję i trafność sugestii.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">📬 Kontakt</h2>
          <p>Skontaktuj się z nami: <a href="mailto:datalorian.ai@gmail.com" className="text-indigo-300 underline">datalorian.ai@gmail.com</a></p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🪐 Blog</h2>
          <article className="bg-indigo-950 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Jak AI zmienia systemy rekomendacji</h3>
            <p className="text-sm text-indigo-300 mb-2">24 lipca 2025</p>
            <p>
              Systemy rekomendacyjne oparte na sztucznej inteligencji potrafią dynamicznie analizować zachowania użytkowników,
              dane o produktach oraz kontekst w czasie rzeczywistym. Dzięki modelom uczenia maszynowego możliwa jest hiperpersonalizacja,
              co znacząco zwiększa współczynniki konwersji w e-commerce.
            </p>
          </article>
        </section>

        <footer className="text-center text-sm text-indigo-400 mt-20">
          © 2025 Datalorian AI — powered by space-grade intelligence.
        </footer>
      </main>
    </div>
  )
}
