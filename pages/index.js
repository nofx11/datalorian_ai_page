
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/logo.png";

const translations = {
  pl: {
    title: "Datalorian AI",
    description:
      "Inteligentna platforma rekomendacyjna oparta na AI dla e-commerce. Wykorzystujemy dane i modele sztucznej inteligencji, by zwiększać konwersję i trafność sugestii.",
    blogTitle: "🧠 Blog",
    blogPostTitle: "Jak AI zmienia systemy rekomendacji",
    blogPost:
      "Systemy rekomendacyjne oparte na sztucznej inteligencji potrafią dynamicznie analizować zachowania użytkowników, dane o produktach oraz kontekst w czasie rzeczywistym. Dzięki modelom uczenia maszynowego możliwa jest hiperpersonalizacja, co znacząco zwiększa współczynniki konwersji w e-commerce.",
    contact: "Kontakt",
    footer: "© 2025 Datalorian AI — powered by space-grade intelligence.",
  },
  en: {
    title: "Datalorian AI",
    description:
      "An intelligent AI-based recommendation platform for e-commerce. We leverage data and artificial intelligence models to increase conversion and suggestion accuracy.",
    blogTitle: "🧠 Blog",
    blogPostTitle: "How AI is Changing Recommendation Systems",
    blogPost:
      "AI-powered recommendation systems dynamically analyze user behavior, product data, and context in real-time. Machine learning enables hyper-personalization, significantly improving conversion rates in e-commerce.",
    contact: "Contact",
    footer: "© 2025 Datalorian AI — powered by space-grade intelligence.",
  },
};

export default function Home() {
  const [lang, setLang] = useState("pl");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{t.title}</title>
      </Head>
      <header className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Datalorian AI logo" width={80} height={80} />
          <h1 className="text-2xl font-bold">{t.title}</h1>
        </div>
        <div className="space-x-4">
          <button onClick={() => setLang("pl")}>PL</button>
          <button onClick={() => setLang("en")}>EN</button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <p className="text-lg my-4">{t.description}</p>

        <section id="blog" className="my-10">
          <h2 className="text-xl font-semibold mb-4">{t.blogTitle}</h2>
          <article>
            <h3 className="text-lg font-bold">{t.blogPostTitle}</h3>
            <p className="text-sm text-gray-700 mt-2">{t.blogPost}</p>
          </article>
        </section>

        <section id="contact" className="mt-10">
          <h2 className="text-xl font-semibold">{t.contact}</h2>
          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:datalorian.ai@gmail.com"
              className="text-blue-600 underline"
            >
              datalorian.ai@gmail.com
            </a>
          </p>
        </section>
      </main>
      <footer className="text-center p-4 border-t mt-10 text-sm text-gray-600">
        {t.footer}
      </footer>
    </div>
  );
}
