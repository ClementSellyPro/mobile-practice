import { Header } from "@/components/Header";
import { PopularExercise } from "@/components/PopularExercise";
import { TodayWorkout } from "@/components/TodayWorkout";
import { WorkoutProgress } from "@/components/WorkoutProgress";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ScrollView, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const colors = useThemeColor();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView style={styles.innerContainer}>
        <Header />

        <WorkoutProgress />

        <TodayWorkout />

        <PopularExercise />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  innerContainer: {
    gap: 20,
  },
});
