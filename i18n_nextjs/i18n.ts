import NextI18Next from "next-i18next";

const nextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  defaultLanguage: "en",
  defaultNS: "common",
  localePath: "public/static/locales",
  localeSubpaths:{
    en: 'en',
    de: 'de',
  },
  otherLanguages: ["de", "en"],
  debug: true,
});

export const { appWithTranslation, withTranslation, i18n, Link, useTranslation, Router } = nextI18NextInstance;

export default nextI18NextInstance;

