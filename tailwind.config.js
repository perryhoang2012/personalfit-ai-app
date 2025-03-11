/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        fonts: {
          "inter-black": ["Black", "sans-serif"],
          "inter-black-italic": ["BlackItalic", "sans-serif"],
          "inter-bold": ["Bold", "sans-serif"],
          "inter-bold-italic": ["BoldItalic", "sans-serif"],
          "inter-extra-bold": ["ExtraBold", "sans-serif"],
          "inter-extra-bold-italic": ["ExtraBoldItalic", "sans-serif"],
          "inter-extra-light": ["ExtraLight", "sans-serif"],
          "inter-extra-light-italic": ["ExtraLightItalic", "sans-serif"],
          "inter-italic": ["Italic", "sans-serif"],
          "inter-light": ["Light", "sans-serif"],
          "inter-light-italic": ["LightItalic", "sans-serif"],
          "inter-medium": ["Medium", "sans-serif"],
          "inter-medium-italic": ["MediumItalic", "sans-serif"],
          "inter-regular": ["Regular", "sans-serif"],
          "inter-semi-bold": ["SemiBold", "sans-serif"],
          "inter-semi-bold-italic": ["SemiBoldItalic", "sans-serif"],
          "inter-thin": ["Thin", "sans-serif"],
          "inter-thin-italic": ["ThinItalic", "sans-serif"],
        },
      },
      colors: {
        commonWhite: "#FFFFFF",
        commonBlack: "#000000",
        background: "#121212",
        text: "#ffffff",
        primary: "#e74c3c",

        indigo: "#1E19D8",
        blue: "#1E19D8",

        success: "#00AC56",
        error: "#FF1F7D",
        warning: "#F5BF3D",

        neutral: "#FFFFFF",

        gray50: "#FAFAFA",
        gray100: "#F5F5F5",
        gray200: "#EEEEEE",
        gray300: "#D4D4D4",
        gray400: "#A3A3A3",
        gray500: "#737373",
        gray600: "#525252",
        gray700: "#404040",
        gray800: "#262626",
        gray900: "#1A1A1A",

        borderInput: "#404040",
        textInvert: "#A3A3A3",
        textSecondary: "#D4D4D4",
        backgroundLight: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
