import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="message" options={{ headerShown: false }} />
      <Tabs.Screen name="calendar" options={{ headerShown: false }} />
      <Tabs.Screen name="user" options={{ headerShown: false }} />
    </Tabs>
  );
}
