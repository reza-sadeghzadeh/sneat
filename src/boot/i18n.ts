import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
// import Backend from "i18next-http-backend"
import enTrans from "../locales/en/translation.json"
import faTrans from "../locales/fa/translation.json"

export default function initI18n() {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    // in order to use the backend plugin remove the resources and put locales folder in public
    // .use(Backend)
    .init({
      fallbackLng: "en",
      debug: import.meta.env.DEV,
      resources: {
        en: {
          translation: enTrans,
        },
        fa: {
          translation: faTrans,
        },
      },
    })
}
