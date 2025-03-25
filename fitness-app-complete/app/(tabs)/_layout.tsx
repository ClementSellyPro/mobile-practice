import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="resources" options={{ headerShown: false }} />
      <Tabs.Screen name="favorites" options={{ headerShown: false }} />
      <Tabs.Screen name="support" options={{ headerShown: false }} />
    </Tabs>
  );
}
