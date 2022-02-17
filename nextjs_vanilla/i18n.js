import NextI18Next from 'next-i18next';


export const DEFAULT_LOCALE = 'en';

export const AVAILABLE_LOCALE_LIST = ['en', 'ko','zh', 'zh-TW'];


const nextI18NextInstance = new NextI18Next({
  defaultLanguage: DEFAULT_LOCALE,
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
  defaultNS: 'strings',
  otherLanguages: [...AVAILABLE_LOCALE_LIST],
  localeSubpaths: {
    en: 'en',
    ko: 'ko',
    'zh-TW': 'tw',
  },
  localeStructure: '{lng}/{ns}',
  contextSeparator: '/',
  pluralSeparator: '.',
  nonExplicitSupportedLngs: true,
  keySeparator: false,
  load: 'currentOnly',
  cleanCode: false,
  fallbackLng: {
    default: ['en']
  },
  interpolation: { prefix: '{', suffix: '}' },
  debug: true,
  detection: {
    lookupCookie: 'locale',
    lookupQuerystring: 'locale',
    order: ['querystring', 'cookie', 'header'],
    caches: ['cookie'],
    cookieOptions: {path: '/', secure: true, },
  }
});

export const { appWithTranslation, withTranslation, i18n, Link, useTranslation, Router } = nextI18NextInstance;

export default nextI18NextInstance;