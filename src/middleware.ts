import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "@/i18n.config"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { getLatestVersion, versionHasTranslation } from "@/config/versions"

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

function getVersionAndLocale(pathname: string): { version: string; locale: string | null } {
  const parts = pathname.split("/").filter(Boolean)
  if (parts[0]?.startsWith("v")) {
    return { version: parts[0], locale: parts[1] || null }
  }
  return { version: "", locale: parts[0] || null }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const { version, locale } = getVersionAndLocale(pathname)

  // Function to get the appropriate locale
  const getAppropriateLocale = (version: string, userLocale: string) => {
    if (versionHasTranslation(version)) {
      return userLocale === "pt" ? "pt" : "en"
    }
    return "en"
  }

  // Handle root path
  if (pathname === "/") {
    const latestVersion = getLatestVersion()
    const userLocale = getLocale(request) || "en"
    const appropriateLocale = getAppropriateLocale(latestVersion, userLocale)
    return NextResponse.redirect(new URL(`/${latestVersion}/${appropriateLocale}`, request.url))
  }

  // Handle version paths
  if (version) {
    if (!locale) {
      const userLocale = getLocale(request) || "en"
      const appropriateLocale = getAppropriateLocale(version, userLocale)
      return NextResponse.redirect(new URL(`/${version}/${appropriateLocale}`, request.url))
    }
    // If version and locale are present, allow the request to proceed
    return NextResponse.next()
  }

  // Handle other paths
  const latestVersion = getLatestVersion()
  const userLocale = getLocale(request) || "en"
  const appropriateLocale = getAppropriateLocale(latestVersion, userLocale)
  return NextResponse.redirect(new URL(`/${latestVersion}/${appropriateLocale}${pathname}`, request.url))
}

export const config = {
  matcher: ["/((?!api|api/auth|_vercel/insights|manifest.json|_next/static|_next/image|favicon.ico).*)"],
}

