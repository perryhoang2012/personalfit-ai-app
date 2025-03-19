import { t } from "@/locales";

export const fullNameRules = {
  required: t("FULL_NAME_REQUIRED"),
  minLength: {
    value: 3,
    message: t("FULL_NAME_TOO_SHORT"),
  },
  maxLength: {
    value: 50,
    message: t("FULL_NAME_TOO_LONG"),
  },
  pattern: {
    value: /^[a-zA-ZÀ-ỹ\s]+$/u,
    message: t("INVALID_FULL_NAME"),
  },
};

export const emailRules = {
  required: t("EMAIL_REQUIRED"),
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: t("INVALID_EMAIL"),
  },
};

export const passwordRules = {
  required: t("PASSWORD_REQUIRED"),
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
    message: t("INVALID_PASSWORD"),
  },
};
