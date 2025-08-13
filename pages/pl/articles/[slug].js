// pages/pl/articles/[slug].js
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ARTICLES = {
"ai-agent-frameworks-2025": {
  title: "Najnowsze Frameworki Agentów AI w 2025 roku",
  description:
    "Przegląd najważniejszych frameworków agentów AI w 2025 roku – od AgentMesh po Google ADK – oraz ich zastosowań, wyzwań i kierunków rozwoju.",
  content: (
    <>
      <h2 className="text-2xl font-bold mb-4">Wprowadzenie</h2>
      <p className="mb-4">
        W ostatnich latach sztuczna inteligencja (AI) odnotowała gwałtowny rozwój, szczególnie w obszarze tworzenia frameworków agentów AI. Frameworki te umożliwiają tworzenie, wdrażanie i zarządzanie inteligentnymi agentami, zdolnymi do samodzielnego wykonywania złożonych zadań. Do 2025 roku pojawiło się wiele nowatorskich rozwiązań, z których każde wprowadza unikalne możliwości wspierające automatyzację, współpracę i podejmowanie decyzji w różnych dziedzinach. Niniejszy raport przedstawia przegląd najważniejszych frameworków agentów AI zaprezentowanych do 2025 roku.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Przegląd Nowych Frameworków</h2>
      <p className="mb-4">
        Frameworki agentów AI ewoluowały, aby sprostać rosnącemu zapotrzebowaniu na inteligentną automatyzację w różnych branżach. Kluczowe frameworki w 2025 roku obejmują:
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.1 AgentMesh</h3>
      <p className="mb-4">
        AgentMesh to framework oparty na Pythonie, wykorzystujący system wielu agentów wyspecjalizowanych w różnych obszarach, w tym Plannera, Kodera, Debuggera i Recenzenta. Każdy agent koncentruje się na określonej funkcji, co umożliwia automatyzację zadań związanych z tworzeniem oprogramowania. Współpraca między agentami w AgentMesh pozwala zespołom efektywnie przekształcać wymagania wysokiego poziomu w działający kod (<a href="https://arxiv.org/abs/2507.19902" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">arXiv</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.2 Model Context Protocol (MCP)</h3>
      <p className="mb-4">
        Model Context Protocol (MCP) standaryzuje wymianę kontekstu i koordynację w systemach multi-agentowych. Najwięksi gracze, tacy jak OpenAI i Block, zaadoptowali MCP, rozwiązując problemy związane z zarządzaniem kontekstem i skalowalnością. MCP pozycjonuje się jako uniwersalny standard łączności dla AI (<a href="https://www.researchgate.net/publication/389045798_Advancing_innovation_in_financial_stability_A_comprehensive_review_of_AI_agent_frameworks_challenges_and_applications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">ResearchGate</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.3 LangChain</h3>
      <p className="mb-4">
        LangChain jest zaprojektowany z myślą o modułowości i elastyczności, umożliwiając tworzenie aplikacji poprzez łączenie modeli językowych, zewnętrznych narzędzi i niestandardowej logiki. Obsługuje integrację z wieloma LLM oraz zapewnia funkcje do interakcji z API i wyszukiwania semantycznego. LangChain szczególnie dobrze sprawdza się w tworzeniu konwersacyjnych AI, automatycznych asystentów badawczych i narzędzi do analizy dokumentów (<a href="https://aiagentstore.ai/ai-agent-news/2025-april" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">AI Agent Store</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.4 LangGraph</h3>
      <p className="mb-4">
        Rozszerzenie LangChain, LangGraph koncentruje się na stanowych, grafowych przepływach pracy agentów. Zapewnia zaawansowaną obsługę błędów i umożliwia złożone interakcje oparte na stanie, co czyni go skutecznym w aplikacjach wymagających intensywnego pozyskiwania danych i fuzji wiedzy, szczególnie w badaniach (<a href="https://phyniks.com/blog/top-7-agentic-ai-frameworks-in-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Phyniks</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.5 AutoGen</h3>
      <p className="mb-4">
        Opracowany przez Microsoft, AutoGen to framework multi-agentowy skoncentrowany na konwersacjach, mający na celu uproszczenie zarządzania wieloma współpracującymi agentami AI. Obsługuje przepływy pracy oparte na zdarzeniach oraz oferuje studio no-code do szybkiego prototypowania, co czyni go idealnym rozwiązaniem dla zastosowań korporacyjnych (<a href="https://www.fluid.ai/blog/top-5-ai-agent-frameworks-for-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Fluid AI</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.6 Amazon Bedrock AgentCore</h3>
      <p className="mb-4">
        Amazon Bedrock AgentCore, wprowadzony przez AWS, umożliwia tworzenie agentów AI w skali korporacyjnej. Zapewnia narzędzia do bezpiecznego dostępu do usług, zarządzania kontekstem oraz rozwiązywania złożonych problemów (<a href="https://www.techradar.com/pro/aws-looks-to-super-charge-ai-agents-with-amazon-bedrock-agentcore" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">TechRadar</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.7 Google Agent Development Kit (ADK)</h3>
      <p className="mb-4">
        Zaprezentowany podczas Google Cloud Next 2025, Agent Development Kit (ADK) pozwala programistom tworzyć i wdrażać systemy multi-agentowe z modułowymi przepływami pracy i dynamiczną orkiestracją agentów. Obsługuje trasowanie oparte na LLM oraz zapewnia zgodność (<a href="https://www.itpro.com/cloud/live/google-cloud-next-2025-all-the-news-and-updates-live" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">ITPro</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.8 CrewAI</h3>
      <p className="mb-4">
        CrewAI stosuje podejście oparte na rolach, umożliwiając tworzenie wyspecjalizowanych agentów współpracujących przy złożonych projektach. Framework oferuje dynamiczne planowanie zadań oraz monitorowanie wydajności w czasie rzeczywistym (<a href="https://www.fluid.ai/blog/top-5-ai-agent-frameworks-for-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Fluid AI</a>).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1.9 Frameworki Uczenia przez Wzmacnianie</h3>
      <p className="mb-4">
        Wprowadzenie frameworka „Agent Lightning” umożliwia trenowanie agentów AI z wykorzystaniem technik uczenia przez wzmacnianie. Framework integruje wyuczone zachowania z istniejącymi agentami, wspierając złożoną logikę interakcji (<a href="https://arxiv.org/abs/2508.03680" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">arXiv</a>).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Studia Przypadków Obecnych Zastosowań</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Sektor finansowy</strong>: AutoGen i CrewAI usprawniają procesy oceny ryzyka.</li>
        <li><strong>Tworzenie oprogramowania</strong>: AgentMesh i AutoGen automatyzują zadania programistyczne.</li>
        <li><strong>Obsługa klienta</strong>: AutoGen automatyzuje interakcje z klientami przez chatboty.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Wyzwania i Kierunki Rozwoju</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Interoperacyjność</strong>: Integracja różnych systemów AI jest trudna.</li>
        <li><strong>Zarządzanie kontekstem</strong>: Utrzymanie spójności w multi-agentach jest wyzwaniem.</li>
        <li><strong>Kwestie etyczne</strong>: Decyzje AI wymagają rozważenia aspektów etycznych.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Podsumowanie</h2>
      <p className="mb-4">
        Postępy w frameworkach agentów AI do 2025 roku wskazują na wyraźny kierunek w stronę inteligentnej automatyzacji. Frameworki takie jak AgentMesh, AutoGen i Amazon Bedrock AgentCore ilustrują trend w kierunku modułowych, współpracujących systemów zdolnych działać w różnych zastosowaniach.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Źródła i Referencje</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><a href="https://arxiv.org/abs/2507.19902" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">arXiv</a></li>
        <li><a href="https://www.researchgate.net/publication/389045798_Advancing_innovation_in_financial_stability_A_comprehensive_review_of_AI_agent_frameworks_challenges_and_applications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">ResearchGate</a></li>
        <li><a href="https://www.fluid.ai/blog/top-5-ai-agent-frameworks-for-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Fluid AI</a></li>
        <li><a href="https://www.techradar.com/pro/aws-looks-to-super-charge-ai-agents-with-amazon-bedrock-agentcore" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">TechRadar</a></li>
        <li><a href="https://www.itpro.com/cloud/live/google-cloud-next-2025-all-the-news-and-updates-live" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">ITPro</a></li>
        <li><a href="https://phyniks.com/blog/top-7-agentic-ai-frameworks-in-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Phyniks</a></li>
        <li><a href="https://aiagentstore.ai/ai-agent-news/2025-april" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">AI Agent Store</a></li>
      </ol>
    </>
  ),
},
"agentic-ai-commercial-apps-2025": {
  title: "Komercyjne Zastosowania Autonomicznej Agentowej AI: sierpień 2025",
  description:
    "Przegląd zastosowań agentowej AI w handlu detalicznym, finansach, ochronie zdrowia, cyberbezpieczeństwie i sektorze publicznym — metryki, wyzwania i perspektywy.",
  content: (
    <>
      <h2 className="text-2xl font-bold mb-4" id="spis-tresci">Spis treści</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><a href="#wprowadzenie" className="text-blue-600 hover:underline hover:text-blue-800">Wprowadzenie</a></li>
        <li><a href="#handel-detaliczny" className="text-blue-600 hover:underline hover:text-blue-800">Zastosowania w handlu detalicznym</a></li>
        <li><a href="#uslugi-finansowe" className="text-blue-600 hover:underline hover:text-blue-800">Transformacje w usługach finansowych</a></li>
        <li><a href="#ochrona-zdrowia" className="text-blue-600 hover:underline hover:text-blue-800">Postępy w ochronie zdrowia</a></li>
        <li><a href="#cyberbezpieczenstwo" className="text-blue-600 hover:underline hover:text-blue-800">Usprawnienia w cyberbezpieczeństwie</a></li>
        <li><a href="#sektor-publiczny" className="text-blue-600 hover:underline hover:text-blue-800">Innowacje w sektorze publicznym</a></li>
        <li><a href="#wyzwania-i-uwagi" className="text-blue-600 hover:underline hover:text-blue-800">Wyzwania i uwagi</a></li>
        <li><a href="#przyszlosc-agentowej-ai" className="text-blue-600 hover:underline hover:text-blue-800">Przyszłość agentowej AI</a></li>
        <li><a href="#podsumowanie" className="text-blue-600 hover:underline hover:text-blue-800">Podsumowanie</a></li>
        <li><a href="#zrodla" className="text-blue-600 hover:underline hover:text-blue-800">Źródła i Referencje</a></li>
      </ol>

      <h2 className="text-2xl font-bold mb-4" id="wprowadzenie">Wprowadzenie</h2>
      <p className="mb-4">
        Na sierpień 2025 r. <strong>autonomiczna agentowa AI</strong> — zdolna do samodzielnego podejmowania decyzji i wykonywania zadań w czasie rzeczywistym — znacząco przekształca wiele branż. Ten raport omawia najciekawsze zastosowania oraz ich wpływ na efektywność operacyjną, redukcję kosztów i innowacje.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="handel-detaliczny">Zastosowania w handlu detalicznym</h2>
      <p className="mb-4">
        W retailu firmy wykorzystują agentową AI do optymalizacji łańcucha dostaw i poprawy interakcji z klientami. <strong>Levi Strauss</strong> wdrożył prognozowanie popytu i optymalizację zapasów, osiągając <strong>25% mniej braków towaru</strong> i <strong>15% wzrost rentowności</strong> (
        <a href="https://digitaldefynd.com/IQ/agentic-ai-in-retail/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">DigitalDefynd</a>). Detaliści tacy jak <strong>Walmart</strong> stosują algorytmy AI do personalizacji marketingu i poprawy rotacji zapasów.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="uslugi-finansowe">Transformacje w usługach finansowych</h2>
      <p className="mb-4">
        Sektor finansowy doświadcza dużych zmian dzięki narzędziom agentowej AI. <strong>IndexGPT J.P. Morgan</strong> autonomicznie analizuje dane rynkowe i dostosowuje portfele w oparciu o trendy (
        <a href="https://www.forbes.com/sites/zennonkapron/2025/04/23/agentic-ai-the-rise-of-autonomous-decisions-in-the-financial-industry/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Forbes</a>). <strong>Wewnętrzny GPT Store BBVA</strong> pozwala pracownikom tworzyć mikro-agentów do analiz danych klientów, zwiększając efektywność o <strong>30%</strong>. <strong>Citibank</strong> bada zastosowania AI w ocenie ryzyka.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="ochrona-zdrowia">Postępy w ochronie zdrowia</h2>
      <p className="mb-4">
        Ochrona zdrowia szybko się zmienia dzięki agentowej AI. <strong>Skypoint</strong> automatyzuje czynności administracyjne (autoryzacje, skierowania), co daje <strong>40% wzrost przepustowości zespołów</strong> i <strong>50% mniej opóźnień w opiece</strong> (
        <a href="https://owlpostai.com/article/ai-sector-analysis-august-5-2025/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">OwlPost AI</a>). Dodatkowo narzędzia diagnostyczne wspierają wcześniejsze wykrywanie chorób; <strong>IBM Watson Health</strong> wykorzystuje agentową AI do szerokich analiz.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="cyberbezpieczenstwo">Usprawnienia w cyberbezpieczeństwie</h2>
      <p className="mb-4">
        Organizacje takie jak <strong>CrowdStrike</strong> i <strong>IBM</strong> stosują agentów AI do autonomicznego wykrywania i reagowania na zagrożenia, uzyskując <strong>70% lepszą wykrywalność</strong> i <strong>60% krótszy czas reakcji</strong> (
        <a href="https://digitaldefynd.com/IQ/agentic-ai-in-cybersecurity-case-studies/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">DigitalDefynd</a>).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="sektor-publiczny">Innowacje w sektorze publicznym</h2>
      <p className="mb-4">
        W sektorze publicznym wirtualny asystent <strong>„Ask Jamie” w Singapurze</strong> pokazuje, jak agentowa AI wspiera obsługę obywateli — <strong>50% mniej połączeń do call center</strong> i <strong>80% szybsze odpowiedzi</strong> na FAQ (
        <a href="https://www.linkedin.com/pulse/rise-ai-agents-2025-transforming-industries-maan-barazy-d6xaf?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">LinkedIn</a>).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="wyzwania-i-uwagi">Wyzwania i uwagi</h2>
      <p className="mb-4">
        Pomimo potencjału, wdrożenia napotykają trudności. <strong>78% firm</strong> deklaruje niedostateczną gotowość danych do skutecznego użycia agentów AI (
        <a href="https://www.techradar.com/pro/the-next-big-thing-in-ai-is-agents-but-is-your-data-ready?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">TechRadar</a>). Dodatkowo podatności, np. w projekcie <strong>NLWeb Microsoftu</strong>, pokazują wagę silnych ram bezpieczeństwa (
        <a href="https://www.tomsguide.com/computing/internet/microsofts-agentic-ai-roadmap-had-a-flaw-that-let-hackers-take-over-browsers-heres-what-to-know-and-how-to-stay-safe?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Tom's Guide</a>).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="przyszlosc-agentowej-ai">Przyszłość agentowej AI</h2>
      <p className="mb-4">
        Rynek rośnie dynamicznie: prognozy <strong>Mordor Intelligence</strong> mówią o wartości <strong>7,28 mld USD</strong> w 2025 r. i <strong>41,32 mld USD</strong> w 2030 r. (CAGR <strong>41,48%</strong>) (
        <a href="https://www.nasdaq.com/articles/agentic-ai-set-transform-industries-2025-4-stocks-watch?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">NASDAQ</a>).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="podsumowanie">Podsumowanie</h2>
      <p className="mb-4">
        Komercyjne zastosowania agentowej AI obejmują retail, finanse, ochronę zdrowia, cyberbezpieczeństwo i usługi publiczne. Aby w pełni wykorzystać potencjał, kluczowe są jakość danych i bezpieczeństwo.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4" id="zrodla">Źródła i Referencje</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li><a href="https://digitaldefynd.com/IQ/agentic-ai-in-retail/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">DigitalDefynd</a></li>
        <li><a href="https://www.forbes.com/sites/zennonkapron/2025/04/23/agentic-ai-the-rise-of-autonomous-decisions-in-the-financial-industry/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Forbes</a></li>
        <li><a href="https://owlpostai.com/article/ai-sector-analysis-august-5-2025/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">OwlPost AI</a></li>
        <li><a href="https://www.techradar.com/pro/the-next-big-thing-in-ai-is-agents-but-is-your-data-ready?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">TechRadar</a></li>
        <li><a href="https://www.linkedin.com/pulse/rise-ai-agents-2025-transforming-industries-maan-barazy-d6xaf?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">LinkedIn</a></li>
        <li><a href="https://www.nasdaq.com/articles/agentic-ai-set-transform-industries-2025-4-stocks-watch?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">NASDAQ</a></li>
        <li><a href="https://www.tomsguide.com/computing/internet/microsofts-agentic-ai-roadmap-had-a-flaw-that-let-hackers-take-over-browsers-heres-what-to-know-and-how-to-stay-safe?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Tom's Guide</a></li>
        <li><a href="https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/july-august-2025/the-emergence-of-agentic-ai/?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">American Bar Association</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Agentic_AI?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">Wikipedia</a></li>
        <li><a href="https://www.techradar.com/pro/we-want-aws-to-be-the-place-where-everyone-runs-enterprise-ai-agents-the-agentic-era-is-here-for-your-business-so-be-prepared-for-the-new-age?utm_source=openai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline hover:text-blue-800">TechRadar</a></li>
      </ol>
    </>
  ),
},
  "what-is-ml": {
    title: "Czym jest uczenie maszynowe?",
    description:
      "ML buduje modele, które uczą się z danych, aby wykrywać wzorce i przewidywać wyniki.",
    content: (
      <>
        <p className="mb-4">
          Główne paradygmaty: nadzorowane, nienadzorowane i uczenie ze wzmocnieniem.
          Typowy cykl: problem → dane → cechy → model → ewaluacja → wdrożenie.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-3">Popularne algorytmy</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensemble drzew (XGBoost, Random Forest)</li>
          <li>Regresja liniowa/logistyczna, SVM</li>
          <li>Sieci neuronowe (CNN/RNN/Transformers)</li>
        </ul>
      </>
    ),
  },
  "data-science": {
    title: "Data Science i dane",
    description:
      "Data Science łączy statystykę, programowanie i wiedzę domenową, aby wydobywać wartość z danych.",
    content: (
      <>
        <p className="mb-4">
          Cykl życia: zbieranie, czyszczenie, EDA, modelowanie, walidacja i
          komunikacja (dashboardy, dokumentacja).
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-3">Narzędzia</h3>
        <p>Notatniki, SQL, Python, Spark, orkiestracja i platformy MLOps.</p>
      </>
    ),
  },
  "ai-ml-examples": {
    title: "Przykłady zastosowań AI/ML/Data",
    description:
      "Od rekomendacji w e‑commerce i wykrywania fraudów po chatboty i prognozowanie popytu.",
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personalizowane wyszukiwanie i rekomendacje</li>
          <li>Ocena ryzyka nadużyć w płatnościach i kredytach</li>
          <li>Prognozowanie popytu i cen</li>
          <li>Automatyzacja obsługi klienta (chat/voice)</li>
        </ul>
        <p className="mt-6">
          Każdy przypadek wymaga właściwego ładu danych, metryk ewaluacji i guardrails.
        </p>
      </>
    ),
  },
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(ARTICLES).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

function titleToImage(slug) {
  return `/pictures/${slug}.webp`;
}

export default function ArticlePagePL({ slug }) {
  const article = ARTICLES[slug] || null;
  if (!article) return null;

  const { title, description, content } = article;
  const [imgSrc, setImgSrc] = useState(titleToImage(slug));

  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   useEffect(() => {
//     document.body.classList.add('no-anim-page');
//     return () => {
//       document.body.classList.remove('no-anim-page');
//     };
//   }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-primary relative overflow-x-hidden flex flex-col">
      <Head>
        <title>{title} | Datalorian AI</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | Datalorian AI`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="article" />
        <link rel="alternate" hreflang="pl" href="https://datalorian.ai/pl/ai" />
        <link rel="alternate" hreflang="en" href="https://datalorian.ai/en/ai" />
      </Head>

      {/* Nawigacja */}
      <nav
        className={`nav-container ${isScrolled ? 'scrolled' : ''}`}
        style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/pl" className="text-xl font-bold nav-logo">
                Datalorian AI
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="/pl/chat" className="nav-link">
                  Porozmawiaj
                </a>
                <a href="/pl/ai" className="nav-link">
                  Dowiedz się więcej
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="lang-selector relative">
                <button
                  className="lang-btn"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  PL
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showDropdown && (
                  <div className="lang-dropdown">
                    <button
                      className="lang-option"
                      onClick={() => {
                        document.cookie = 'lang=en; path=/; max-age=31536000';
                        window.location.href = `/en/articles/${slug}`;
                      }}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16" />

      <main className="no-anim flex-1 max-w-3xl mx-auto px-4 pb-24 mt-12">
        <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
          <p className="text-secondary mb-4 text-justify">{description}</p>
          <Image
            src={imgSrc}
            alt={title}
            width={640}
            height={360}
            className="w-full h-auto rounded-md object-cover mb-6 not-animated bg-black mx-auto"
            priority
            onError={() => setImgSrc('/pictures/placeholder.webp')}
            style={{ animation: 'none' }}
          />
        </header>

        <article className="prose prose-invert max-w-none text-justify">
          {content}
        </article>

        <div className="mt-12">
          <Link
            href="/pl/ai"
            className="inline-block px-5 py-3 bg-accent text-white font-semibold rounded-lg shadow hover:bg-accent/90 transition-colors transition-transform hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ← Powrót do listy artykułów
          </Link>
        </div>
        </div>
      </main>

      {/* Stopka */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="social-links">
            <a
              href="https://x.com/DatalorianAI"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.89 3.549a1.25 1.25 0 0 0-1.77 0l-5.12 5.12-5.12-5.12a1.25 1.25 0 1 0-1.77 1.77l5.12 5.12-5.12 5.12a1.25 1.25 0 1 0 1.77 1.77l5.12-5.12 5.12 5.12a1.25 1.25 0 1 0 1.77-1.77l-5.12-5.12 5.12-5.12a1.25 1.25 0 0 0 0-1.77z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/datalorianai/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2v4.5h-3v-9h3v1.22c.41-.72 1.39-1.22 2.5-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z" />
              </svg>
            </a>
            <a href="mailto:datalorian.ai@gmail.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-15Zm2.25.5a.75.75 0 0 0-.75.75v.638l8.25 5.5 8.25-5.5V5.75a.75.75 0 0 0-.75-.75h-15Zm15.75 2.862-7.7 5.134a.75.75 0 0 1-.83 0L3.5 7.862V19.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.862Z" />
              </svg>
            </a>
          </div>
          <p className="text-muted text-sm">© {new Date().getFullYear()} Datalorian AI — powered by space-grade intelligence.</p>
        </div>
      </footer>
    </div>
  );
}