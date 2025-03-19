import { Header } from "@/components/Header";
import { WorkoutProgress } from "@/components/WorkoutProgress";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const colors = useThemeColor();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Header />
      <WorkoutProgress />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
});
