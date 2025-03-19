import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Progression } from "./Progression";

export function WorkoutProgress() {
  const colors = useThemeColor();

  return (
    <View style={[styles.container, { backgroundColor: colors.lightGreen }]}>
      <View>
        <ThemedText variant="title">Workout Progress!</ThemedText>
        <ThemedText
          style={{ color: colors.textGray, fontWeight: "400", fontSize: 20 }}
        >
          5 Exercise Left
        </ThemedText>
      </View>

      <Progression />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 5,
  },
});
