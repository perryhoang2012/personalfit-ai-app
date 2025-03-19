import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href="/(tabs)" asChild>
        <Text>Home Screen</Text>
      </Link>
      <Link href="/sign-in" asChild>
        <TouchableOpacity>
          <Text> Sign In</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
