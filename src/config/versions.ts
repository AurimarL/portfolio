export interface Version {
    version: string
    status: string
    haveTranslation: boolean
  }
  
  export const versions: Version[] = [
    {
      version: "v0",
      status: "dev",
      haveTranslation: false,
    },
    {
      version: "v1",
      status: "current",
      haveTranslation: true,
    },
  ]
  
  export function getLatestVersion(): string {
    const currentVersion = versions.find((v) => v.status === "current")
    return currentVersion ? currentVersion.version : versions[versions.length - 1].version
  }
  
  export function versionHasTranslation(version: string): boolean {
    const versionInfo = versions.find(v => v.version === version)
    return versionInfo ? versionInfo.haveTranslation : false
  }
  