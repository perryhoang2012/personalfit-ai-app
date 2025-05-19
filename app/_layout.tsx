import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../global.css";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NetworkStatus } from "../components/NetworkStatus";

if (__DEV__) {
  require("../config/ReactotronConfig");
  console.log("🔧 Reactotron Configured");
}

const queryClient = new QueryClient();

export default function RootLayout() {
  const { i18n } = useTranslation();

  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
  });

  useEffect(() => {
    // Set default language
    i18n.changeLanguage("en");
  }, [i18n]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NetworkStatus />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="login"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="register"
          options={{ title: "Register", headerShown: false }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
