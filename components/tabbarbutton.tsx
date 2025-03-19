import Chart from "@/assets/svg/Chart";
import ChartInActive from "@/assets/svg/ChartInActive";
import Home from "@/assets/svg/Home";
import HomeInActive from "@/assets/svg/HomeInActiove";
import ProfileCircle from "@/assets/svg/ProfileCircle";
import ProfileCircleInActive from "@/assets/svg/ProfileCircleInActive";
import Search from "@/assets/svg/Search";
import SearchInActive from "@/assets/svg/SearchInActive";
import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {
  isFocused: boolean;
  label: string;
  routeName: string;
  color: string;
  onLongPress: () => void;
  onPress: () => void;
};

/**
 * A single tab button in the tab bar
 * @param {Props} props
 * @returns {JSX.Element}
 */

const icons: {
  [key: string]: ({ isFocused }: { isFocused: boolean }) => JSX.Element;
} = {
  index: ({ isFocused }: { isFocused: boolean }) =>
    isFocused ? <Home /> : <HomeInActive />,
  activity: ({ isFocused }: { isFocused: boolean }) =>
    isFocused ? <Chart /> : <ChartInActive />,
  explore: ({ isFocused }: { isFocused: boolean }) =>
    isFocused ? <Search /> : <SearchInActive />,
  account: ({ isFocused }: { isFocused: boolean }) =>
    isFocused ? <ProfileCircle /> : <ProfileCircleInActive />,
};

const TabBarButton = ({
  isFocused,
  label,
  routeName,
  color,
  onPress: handlePress,
  onLongPress: handleLongPress,
}: Props) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(scale.value, [0, 1], [1, 1.4]) }],
    top: interpolate(scale.value, [0, 1], [0, 8]),
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scale.value, [0, 1], [1, 0]),
  }));

  return (
    <Pressable
      style={styles.container}
      onPress={handlePress}
      onLongPress={handleLongPress}
    >
      <Animated.View style={animatedIconStyle}>
        {icons[routeName]({ isFocused })}
      </Animated.View>

      <Animated.Text style={[{ color, fontSize: 11 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBarButton;
