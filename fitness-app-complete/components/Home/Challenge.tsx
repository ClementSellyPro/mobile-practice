import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";

export function Challenge() {
  const colors = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.purpleLight }]}>
      <View style={[styles.itemBox, { backgroundColor: colors.black }]}>
        <View style={styles.textSection}>
          <ThemedText
            variant="title"
            style={{
              color: colors.green,
              fontWeight: "medium",
              textAlign: "center",
            }}
          >
            Weekly Challenge
          </ThemedText>
          <ThemedText variant="tiny">Plank With Hip Twist</ThemedText>
        </View>
        <Image source={require("@/assets/images/challenge.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 180,
    marginHorizontal: -35,
  },
  itemBox: {
    flexDirection: "row",
    borderRadius: 20,
  },
  textSection: {
    justifyContent: "center",
    alignItems: "center",
    width: 180,
  },
});
