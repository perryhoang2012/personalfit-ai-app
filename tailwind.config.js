/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "inter-regular": ["Inter-Regular"],
        "inter-medium": ["Inter-Medium"],
        "inter-semibold": ["Inter-SemiBold"],
        "inter-bold": ["Inter-Bold"],
      },
      fontSize: {
        // Xtra-Large
        xl: ["18px", { lineHeight: "24px" }],
        lg: ["16px", { lineHeight: "22px" }],
        md: ["14px", { lineHeight: "20px" }],
        sm: ["12px", { lineHeight: "16px" }],
        xs: ["10px", { lineHeight: "14px" }],
      },
      colors: {
        primary: "#B1F80B",
        success: "#00AC66",
        error: "#FF5C5C",
        warning: "#FFD130",
        white: "#FFFFFF",
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
