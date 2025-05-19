import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNetworkStatus } from "../hooks/useNetworkStatus";

export const NetworkStatus = () => {
  const { isConnected, connectionType } = useNetworkStatus();

  if (isConnected) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ff3b30",
    padding: 10,
    alignItems: "center",
    zIndex: 999,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
