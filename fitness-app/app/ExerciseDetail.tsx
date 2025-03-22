import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ExerciseDetail() {
  const colors = useThemeColor();
  const { title, numberWorkout, time, description } = useLocalSearchParams();

  function detailsPress() {}

  function startPress() {}

  return (
    <View style={styles.container}>
      <View style={styles.illustration}></View>

      <Text style={styles.numberWorkout}>{numberWorkout} Workout</Text>

      {/* Title and description */}
      <ThemedText variant="title" style={styles.title}>
        {title}
      </ThemedText>
      <Text style={[styles.description, { color: colors.textGray }]}>
        {description}
      </Text>

      {/* Details, time and cal */}
      <View style={styles.detailsGroup}>
        <View style={styles.detailsItem}>
          <Image
            style={styles.images}
            source={require("@/assets/images/icon/dumbbell.png")}
          />
          <Text style={styles.detailText}>{time} min</Text>
        </View>

        <View style={styles.detailsItem}>
          <Image
            style={styles.images}
            source={require("@/assets/images/icon/dumbbell.png")}
          />
          <Text style={styles.detailText}>450kcal</Text>
        </View>
      </View>

      {/* Buttons group */}
      <View style={styles.btnGroup}>
        <Pressable
          style={[styles.btn, styles.btnDetails]}
          onPress={() => detailsPress()}
        >
          <Text style={styles.btnText}>Details</Text>
          <Image
            style={styles.images}
            source={require("@/assets/images/icon/calendar.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.btn, { backgroundColor: colors.tint }]}
          onPress={() => startPress()}
        >
          <Text style={styles.btnText}>Start</Text>
          <Image
            style={styles.images}
            source={require("@/assets/images/icon/clock_dark.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: "#fff",
  },
  illustration: {
    // borderColor: "#000",
    // borderWidth: 2,
    flex: 0.9,
  },
  numberWorkout: {
    fontSize: 18,
    fontWeight: "500",
    borderColor: "#aaa",
    borderWidth: 2,
    alignSelf: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 4,
    borderRadius: 18,
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    marginBottom: 6,
  },
  description: {
    fontWeight: "500",
  },
  detailsGroup: {
    flexDirection: "row",
    gap: 15,
    marginTop: 20,
  },
  detailsItem: {
    flexDirection: "row",
    gap: 8,
  },
  detailText: {
    fontWeight: "700",
    fontSize: 18,
  },
  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 50,
    width: 180,
  },
  btnDetails: {
    borderColor: "#aaa",
    borderWidth: 2,
  },
  btnStart: {},
  btnText: {
    fontWeight: "500",
    fontSize: 20,
  },
  images: {
    width: 25,
    height: 25,
  },
});
