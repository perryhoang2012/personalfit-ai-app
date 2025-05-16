import React from "react";
import { StyleSheet, View } from "react-native";
import TabBarButton from "./TabBarButton";

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};

interface Route {
  key: string;
  name: string;
  params: any;
}

const TabBar = ({ state, descriptors, navigation }: Props) => {
  const primaryColor = "#0891b2";
  const greyColor = "#737373";
  const hiddenRoutes = ["_sitemap", "+not-found"];

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: Route, index: number) => {
        if (hiddenRoutes.includes(route.name)) return null;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
            label={label}
            onLongPress={onLongPress}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    marginHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});

export default TabBar;
