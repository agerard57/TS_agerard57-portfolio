import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(new LanguageDetector())
  .use(Backend)
  .use(initReactI18next)
  .init({
    detection: { order: ["querystring"] },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export { i18n };
