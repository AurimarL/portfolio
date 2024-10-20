import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  pt: () => import("@/dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

const Resumedictionaries = {
  en: () =>
    import("@/dictionaries/resume/en.json").then((module) => module.default),
  pt: () =>
    import("@/dictionaries/resume/pt.json").then((module) => module.default),
};

export const getResumeDictionary = async (locale: Locale) =>
  Resumedictionaries[locale]();
