import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esJSON from './locale/es.json';
import enJSON from './locale/en.json';

const resources = {
  EN: {
    translation: enJSON,
  },
  ES: {
    translation: esJSON,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  resources,
  fallbackLng: 'EN',
  lng: 'EN', // Set the initial language of the App
});
