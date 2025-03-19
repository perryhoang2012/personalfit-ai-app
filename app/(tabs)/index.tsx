import { getStatusBarHeight } from "@/utils/uiHelper";
import * as React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className={`flex-1 bg-background pt-[${getStatusBarHeight + 40}]`}>
      <View></View>
      <Text>123123</Text>
    </View>
  );
}
