import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Head>
        <title>Datalorian AI</title>
      </Head>

      <main className="max-w-4xl mx-auto p-8">
        <header className="text-center mb-12">
          <img src="/logo.png" alt="Datalorian AI" className="h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Datalorian AI</h1>
          <p className="text-xl mt-2">Kosmiczne rekomendacje dla e-commerce zasilane przez AI 🚀</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">🌐 O nas</h2>
          <p>
            Datalorian AI to inteligentna platforma rekomendacyjna wspierająca e-commerce.
            Łączymy analizę danych, sztuczną inteligencję i personalizację doświadczenia użytkownika.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">📬 Kontakt</h2>
          <form action="mailto:datalorian.ai@gmail.com" method="post" className="space-y-4">
            <input type="text" name="name" placeholder="Imię i nazwisko" required className="w-full p-2 rounded text-black"/>
            <input type="email" name="email" placeholder="Adres e-mail" required className="w-full p-2 rounded text-black"/>
            <textarea name="message" rows="4" placeholder="Wiadomość" required className="w-full p-2 rounded text-black"></textarea>
            <button type="submit" className="bg-white text-black px-4 py-2 rounded">Wyślij</button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🪐 Blog</h2>
          <p>Wkrótce pojawią się tu wpisy o AI, danych i rekomendacjach!</p>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-400 mt-16">
        © 2025 Datalorian AI. All rights reserved.
      </footer>
    </div>
  )
}
