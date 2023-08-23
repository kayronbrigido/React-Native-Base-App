import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './languages/en.json';
import ptTranslation from './languages/pt.json';

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    debug: false,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    ns: ['translation'],
    resources,
  });

export default i18n;

