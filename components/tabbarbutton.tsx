import Chart from "../assets/svg/Chart";
import ChartInActive from "../assets/svg/ChartInActive";
import Home from "../assets/svg/Home";
import HomeInActive from "../assets/svg/HomeInActiove";
import ProfileCircle from "../assets/svg/ProfileCircle";
import ProfileCircleInActive from "../assets/svg/ProfileCircleInActive";
import Search from "../assets/svg/Search";
import SearchInActive from "../assets/svg/SearchInActive";
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
 */
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

  const IconComponent = getIconComponent(routeName, isFocused);

  return (
    <Pressable
      style={styles.container}
      onPress={handlePress}
      onLongPress={handleLongPress}
    >
      <Animated.View style={animatedIconStyle}>{IconComponent}</Animated.View>

      <Animated.Text style={[{ color, fontSize: 11 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

/**
 * Returns the appropriate icon component based on route name and focus state
 */
const getIconComponent = (
  routeName: string,
  isFocused: boolean
): JSX.Element => {
  switch (routeName) {
    case "index":
      return isFocused ? <Home /> : <HomeInActive />;
    case "activity":
      return isFocused ? <Chart /> : <ChartInActive />;
    case "explore":
      return isFocused ? <Search /> : <SearchInActive />;
    case "account":
      return isFocused ? <ProfileCircle /> : <ProfileCircleInActive />;
    default:
      return <></>;
  }
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
