import en from "./en";
import vi from "./vi";

type Locale = "en" | "vi";

type LocaleStrings = {
  [key: string]: string;
};

let currentLocale: Locale = "en";

const strings: { [locale in Locale]: LocaleStrings } = {
  en,
  vi,
};
export const setLocale = (locale: Locale) => {
  currentLocale = locale;
};

export const t = (key: string): string => {
  return strings[currentLocale][key] || key;
};
