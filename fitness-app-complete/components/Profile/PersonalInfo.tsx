import { useThemeColors } from "@/hook/useThemeColors";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

export function PersonalInfo() {
  const colors = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.purple }]}>
      <View style={styles.item}>
        <ThemedText>75kg</ThemedText>
        <ThemedText variant="tiny">Weight</ThemedText>
      </View>
      <View style={[styles.ageSection, styles.item]}>
        <ThemedText>28</ThemedText>
        <ThemedText variant="tiny">Years Old</ThemedText>
      </View>
      <View style={styles.item}>
        <ThemedText>1.65 CM</ThemedText>
        <ThemedText variant="tiny">Height</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    height: 65,
    width: "100%",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  ageSection: {
    width: "40%",
    borderColor: "#FFF",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
