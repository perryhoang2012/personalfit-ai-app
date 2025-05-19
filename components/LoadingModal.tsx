import React from "react";
import { StyleSheet, View } from "react-native";
import { useGeneralStore } from "../store/generalStore";
import LottieView from "lottie-react-native";

export const LoadingModal = () => {
  const isLoading = useGeneralStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 100,
          height: 100,
        }}
        loop={true}
        source={require("../assets/json/loading.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
