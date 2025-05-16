export const Fonts = {
  regular: "Inter-Regular",
  medium: "Inter-Medium",
  semiBold: "Inter-SemiBold",
  bold: "Inter-Bold",
} as const;

export type FontWeight = keyof typeof Fonts;
