// middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const { nextUrl, headers } = req

  // Jeśli to już jest /pl lub /en — nie przekierowuj
  if (nextUrl.pathname.startsWith('/pl') || nextUrl.pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  // Pobierz język z nagłówka
  const lang = headers.get('accept-language') || ''
  const preferredLang = lang.split(',')[0].split('-')[0]

  // Przekierowanie na podstawie języka
  const redirectLocale = preferredLang === 'pl' ? 'pl' : 'en'

  return NextResponse.redirect(new URL(`/${redirectLocale}`, req.url))
}

export const config = {
  matcher: ['/'],
}
