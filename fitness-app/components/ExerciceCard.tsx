import { useThemeColor } from "@/hooks/useThemeColor";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";

type exoCardType = {
  title: string;
  icon: ImageSourcePropType | undefined;
  color: string;
  numberWorkout: string;
  time: string;
  description: string;
};

export function ExerciseCard({
  title,
  icon,
  color,
  numberWorkout,
  time,
  description,
}: exoCardType) {
  const colors = useThemeColor();
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "../ExerciseDetail",
          params: {
            title: title,
            numberWorkout: numberWorkout,
            time: time,
            description: description,
          },
        })
      }
      style={[styles.container, { backgroundColor: color }]}
    >
      <Image style={styles.icon} source={icon} />

      <ThemedText variant="subtitle">{title}</ThemedText>

      <ThemedText style={[styles.workoutNumber, { color: colors.textGray }]}>
        {numberWorkout} workout
      </ThemedText>

      <View style={styles.clockContainer}>
        <Image
          style={styles.iconClock}
          source={require("@/assets/images/icon/clock_dark.png")}
        />
        <Text style={styles.time}>{time} min</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 130,
    height: 180,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  icon: {
    width: 50,
    height: 50,
  },
  workoutNumber: {
    fontSize: 14,
  },
  clockContainer: {
    flexDirection: "row",
    gap: 5,
  },
  iconClock: {
    width: 20,
    height: 20,
  },
  time: {
    fontWeight: "bold",
  },
});
