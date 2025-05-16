import { t } from "../../locales";
import { getStatusBarHeight } from "../../utils/uiHelper";
import * as React from "react";
import { View, Text } from "react-native";

export default function Home() {
  const topPadding = getStatusBarHeight + 40;

  return (
    <View
      className={`flex-1 bg-background`}
      style={{ paddingTop: topPadding, backgroundColor: "red" }}
    >
      <View />
      <Text className="text-2xl font-bold text-center accent-black">
        {t("HOME")}
      </Text>
    </View>
  );
}
