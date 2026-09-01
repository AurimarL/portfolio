import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "@/i18n.config"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

function getLocale(request: NextRequest): string {
  const headers: Record<string, string> = {}
  request.headers.forEach((value, key) => (headers[key] = value))
  const languages = new Negotiator({ headers }).languages()
  return matchLocale(languages, [...i18n.locales], i18n.defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${getLocale(request)}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_vercel/insights|robots.txt|sitemap.xml|manifest.json|_next/static|_next/image|favicon.ico).*)"],
}
