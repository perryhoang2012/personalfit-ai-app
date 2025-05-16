import TabBar from "../../components/TabBar";
import { t } from "../../locales";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: t("HOME"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: t("ACTIVITY"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: t("EXPLORE"),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: t("ACCOUNT"),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
