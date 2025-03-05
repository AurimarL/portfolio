"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronDown, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { versions } from "@/config/versions"

export function VersionDropdown() {
  const pathname = usePathname()

  // Extraindo a versão diretamente da URL
  const versionMatch = pathname.match(/^\/(v\d+)(\/|$)/)
  const currentVersion = versionMatch ? versionMatch[1] : "v1"

  // Encontrar a versão ativa
  const activeVersion = versions.find((v) => v.version === currentVersion) || versions[0]

  // Gerar novo caminho ao trocar de versão
  const getVersionPath = (newVersion: string) => {
    return versionMatch ? pathname.replace(/^\/v\d+/, `/${newVersion}`) : `/${newVersion}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 px-2 py-1 text-xs text-gray-300 hover:text-white transition-colors rounded border border-gray-800 hover:border-gray-700 bg-black">
        {activeVersion.version}
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-24 bg-black border border-gray-800 text-white">
        {versions.map((version) => (
          <DropdownMenuItem key={version.version} asChild className="text-xs">
            <Link href={getVersionPath(version.version)} className="flex items-center justify-between py-1.5">
              <span className="flex items-center gap-1">
                {version.version}
                <span className="text-[10px] text-gray-500 ml-1">
                  {version.status === "current" ? "(latest)" : version.status === "dev" ? "develop" : ""}
                </span>
              </span>
              {version.version === currentVersion && <Check className="h-3 w-3 text-primary" />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
