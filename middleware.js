import { NextResponse } from 'next/server'

export function middleware(req) {
  const { nextUrl, headers, cookies } = req

  // Jeśli już jesteśmy na /pl lub /en, to nie przekierowuj
  if (nextUrl.pathname.startsWith('/pl') || nextUrl.pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  // Sprawdź, czy istnieje już cookie "lang"
  const savedLang = cookies.get('lang')?.value

  // Jeśli cookie istnieje, przekieruj na jego podstawie
  if (savedLang === 'pl' || savedLang === 'en') {
    return NextResponse.redirect(new URL(`/${savedLang}`, req.url))
  }

  // Jeśli nie ma cookie, wykryj język przeglądarki
  const acceptLang = headers.get('accept-language') || ''
  const preferredLang = acceptLang.split(',')[0].split('-')[0]
  const langToSet = preferredLang === 'pl' ? 'pl' : 'en'

  const res = NextResponse.redirect(new URL(`/${langToSet}`, req.url))

  // Ustaw cookie "lang" na 1 rok
  res.cookies.set('lang', langToSet, {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
  })

  return res
}

export const config = {
  matcher: ['/'],
}
