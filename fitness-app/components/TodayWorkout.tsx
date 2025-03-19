import { Image, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export function TodayWorkout() {
  const colors = useThemeColor();
  return (
    <View>
      <ThemedText variant="title">
        Today Workouts
        <Text style={{ color: "#555", fontWeight: "400" }}>(17)</Text>
      </ThemedText>

      <View style={[styles.card, { backgroundColor: colors.darkGreen }]}>
        {/* Top Info */}
        <View style={styles.topInfo}>
          <View style={styles.topInfoItem}>
            <Image
              style={styles.iconClock}
              source={require("@/assets/images/icon/clock.png")}
            />
            <Text style={{ color: "#fff" }}>90min</Text>
          </View>
          <View style={styles.topInfoItem}>
            <Image
              style={styles.iconFire}
              source={require("@/assets/images/icon/fire.png")}
            />
            <Text style={{ color: "#fff" }}>1,200kcal</Text>
          </View>
        </View>
        {/* Title */}
        <View
          style={{
            height: 80,
            width: 200,
          }}
        >
          <ThemedText
            color="textWhite"
            style={{ fontSize: 24, fontWeight: "400", lineHeight: 36 }}
          >
            Upper Body Workout
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 220,
    borderRadius: 35,
    marginTop: 15,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  topInfo: {
    flexDirection: "row",
    gap: 15,
  },
  topInfoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconClock: {
    width: 25,
    height: 25,
  },
  iconFire: {
    width: 20,
    height: 20,
  },
});
