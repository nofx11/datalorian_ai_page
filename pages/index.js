import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import translations from '../locales'

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white font-sans">
      <Head><title>Datalorian AI</title></Head>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <nav className="flex justify-between mb-10 text-sm text-indigo-300">
          <div className="space-x-4">
            <Link href="/" locale="pl">PL</Link>
            <Link href="/" locale="en">EN</Link>
          </div>
          <div className="space-x-4">
            <a href="#blog">{t.blog}</a>
            <a href="mailto:datalorian.ai@gmail.com">{t.contact}</a>
          </div>
        </nav>

        <header className="text-center mb-16">
          <img src="/logo.png" alt="Datalorian AI" className="h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Datalorian AI</h1>
          <p className="text-lg mt-4 text-indigo-200">{t.description}</p>
        </header>

        <section id="blog" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🪐 {t.blog}</h2>
          <article className="bg-indigo-950 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{t.blogPostTitle}</h3>
            <p className="text-sm text-indigo-300 mb-2">{t.blogDate}</p>
            <p>{t.blogContent}</p>
          </article>
        </section>

        <footer className="text-center text-sm text-indigo-400 mt-20">
          © 2025 Datalorian AI — powered by space-grade intelligence.
        </footer>
      </main>
    </div>
  )
}
