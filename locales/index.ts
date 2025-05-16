import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { MMKV } from "react-native-mmkv";
import en from "./en";
import vi from "./vi";

export type Language = "en" | "vi";

const storage = new MMKV();
const LANG_KEY = "@app_language";

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: storage.getString(LANG_KEY) || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const setLanguage = (lang: Language) => {
  storage.set(LANG_KEY, lang);
  i18next.changeLanguage(lang);
};

export const getLanguage = (): Language => {
  return (storage.getString(LANG_KEY) as Language) || "en";
};

export const t = (key: string): string => {
  return i18next.t(key);
};

export default i18next;
