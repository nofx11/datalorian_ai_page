// components/NavBar.js
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function NavBar({ locale = "en", context = "home", slug = "" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const mobilePanelRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const t = {
    en: { chat: "Let's Chat", ai: "Learn More", logoHref: "/en", chatHref: "/en/chat", aiHref: "/en/ai", code: "EN", other: "PL" },
    pl: { chat: "Porozmawiajmy", ai: "Dowiedz się więcej", logoHref: "/pl", chatHref: "/pl/chat", aiHref: "/pl/ai", code: "PL", other: "EN" },
  }[locale];

  const targetLocale = locale === "en" ? "pl" : "en";
  const routeFor = (loc) => {
    if (context === "article" && slug) return `/${loc}/articles/${slug}`;
    if (context === "ai") return `/${loc}/ai`;
    if (context === "chat") return `/${loc}/chat`;
    return `/${loc}`;
  };

  return (
    <nav
      className={`nav-container ${isScrolled ? "scrolled" : ""}`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link href={t.logoHref} className="text-xl font-bold nav-logo">
              Datalorian AI
            </Link>
          </div>

          <div className="flex-1" />

          {/* Right side: nav + language + socials */}
          <div className="flex items-center justify-end gap-4">
            <div className="desktop-only hidden md:flex items-baseline space-x-4 mr-1">
              <Link href={t.chatHref} className="nav-link">
                {t.chat}
              </Link>
              <Link href={t.aiHref} className="nav-link">
                {t.ai}
              </Link>
            </div>

            {/* Social icons */}
            <div className="desktop-only flex items-center nav-social ml-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              <a
                href="https://x.com/DatalorianAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-primary-orange hover:opacity-80 transition-opacity p-1.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3 3h4.6l4.1 6 4.8-6H21l-6.8 8.6L21 21h-4.6l-4.4-6.4L6.8 21H3l7-8.9L3 3zm4 2l4.9 7-4.1 5.1H7l4.3-5.5L7 5zM17 19l-5-7 4.1-5.1H17l-4.3 5.5L17 19z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/datalorianai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-primary-orange hover:opacity-80 transition-opacity p-1.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0H5C2.8 0 1 1.8 1 4v16c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8.3 19.5H5.6V9h2.7v10.5zM7 7.7c-.9 0-1.6-.7-1.6-1.6S6.1 4.5 7 4.5s1.6.7 1.6 1.6S7.9 7.7 7 7.7zM20 19.5h-2.7v-5.6c0-1.3-.5-2.2-1.6-2.2-.9 0-1.4.6-1.7 1.2-.1.2-.1.6-.1.9v5.7h-2.7V9H14v1.5c.4-.6 1.1-1.7 2.7-1.7 2 0 3.3 1.3 3.3 4.1v6.6z" />
                </svg>
              </a>
              <a
                href="mailto:datalorian.ai@gmail.com"
                aria-label="Email"
                className="text-primary-orange hover:opacity-80 transition-opacity p-1.5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.1.5a.4.4 0 0 0-.4.4v.4l8.3 5.5 8.3-5.5v-.4a.4.4 0 0 0-.4-.4h-15Zm15.6 2.8-7.9 5.2a.9.9 0 0 1-1 0L3.9 8.8V18c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V8.8Z" />
                </svg>
              </a>
            </div>

            <div className="lang-selector relative desktop-only">
              <button className="lang-btn" onClick={() => setShowDropdown(!showDropdown)}>
                {t.code}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 inline-block flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {showDropdown && (
                <div className="lang-dropdown">
                  <button
                    className="lang-option"
                    onClick={() => {
                      document.cookie = `lang=${targetLocale}; path=/; max-age=31536000`;
                      window.location.href = routeFor(targetLocale);
                    }}
                  >
                    {targetLocale.toUpperCase()}
                  </button>
                </div>
              )}
            </div>

          {/* Mobile toggle button (right) */}
          {mobileOpen ? (
            <button
              type="button"
              aria-label="Close menu"
              className="mobile-menu-btn mobile-only"
              onClick={() => setMobileOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          ) : (
            <button
              type="button"
              aria-label="Open menu"
              className="mobile-menu-btn mobile-only"
              onClick={() => setMobileOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          )}
          </div>
        </div>
      </div>
    {/* Mobile slide-over */}
    {mobileOpen && (
      <div className="mobile-drawer open md:hidden">
        <div className="drawer-content">
          {/* Nav links */}
          <nav className="flex flex-col gap-2 mt-2">
            <a href={t.chatHref} className="nav-link block" onClick={() => setMobileOpen(false)}>{t.chat}</a>
            <a href={t.aiHref} className="nav-link block" onClick={() => setMobileOpen(false)}>{t.ai}</a>
          </nav>

          {/* Bottom row: Social + Language */}
          <div className="mt-auto flex items-center justify-between gap-4">
            <div className="nav-social flex items-center gap-3">
              <a href="https://x.com/DatalorianAI" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2L6 22"/><path d="M6 2l12 20"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/datalorianai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M8 11v5"/><path d="M8 8h.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 0 0-4 0"/>
                </svg>
              </a>
              <a href="mailto:datalorian.ai@gmail.com" aria-label="Email" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>
                </svg>
              </a>
            </div>

            <div className="lang-selector relative">
              <button className="lang-btn" onClick={() => setShowDropdown(!showDropdown)}>
                {t.code}
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 inline-block flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {showDropdown && (
                <div className="lang-dropdown">
                  <button
                    className="lang-option"
                    onClick={() => {
                      document.cookie = `lang=${targetLocale}; path=/; max-age=31536000`;
                      window.location.href = routeFor(targetLocale);
                      setMobileOpen(false);
                    }}
                  >
                    {targetLocale.toUpperCase()}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="text-xs text-muted mt-3">© {new Date().getFullYear()} Datalorian AI</div>
        </div>
      </div>
    )}
    </nav>
  );
}