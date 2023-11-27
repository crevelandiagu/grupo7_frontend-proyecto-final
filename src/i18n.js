import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import esJSON from './locale/es.json'

i18n.use(initReactI18next).init({
  resources: {
    es: { ...esJSON },
  },
  lng: 'EN', // Set the initial language of the App
});
