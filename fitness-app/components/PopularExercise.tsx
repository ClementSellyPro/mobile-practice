import {
  FlatList,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ExerciseCard } from "./ExerciceCard";

type ExerciceType = {
  id: number;
  icon: ImageSourcePropType | undefined;
  color: string;
  title: string;
  numberWorkout: string;
  time: string;
};

const exerciseData: ExerciceType[] = [
  {
    id: 1941273,
    icon: require("@/assets/images/icon/dumbbell.png"),
    color: "#e0f8fd",
    title: "Dumbbell Workout",
    numberWorkout: "12",
    time: "120",
  },
  {
    id: 1298371473,
    icon: require("@/assets/images/icon/free.png"),
    color: "#e9ffec",
    title: "Free hand exercises",
    numberWorkout: "16",
    time: "90",
  },
  {
    id: 84324,
    icon: require("@/assets/images/icon/yoga.png"),
    color: "#f3e1ee",
    title: "Yoga",
    numberWorkout: "18",
    time: "100",
  },
];

export function PopularExercise() {
  const colors = useThemeColor();

  return (
    <View>
      <View style={styles.header}>
        <ThemedText variant="title">Popular Exercise</ThemedText>
        <Pressable>
          <ThemedText style={{ color: colors.textGray, fontSize: 20 }}>
            See all
          </ThemedText>
        </Pressable>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={exerciseData}
          horizontal={true}
          renderItem={({ item }) => (
            <ExerciseCard
              title={item.title}
              icon={item.icon}
              color={item.color}
              time={item.time}
              numberWorkout={item.numberWorkout}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardsContainer: {
    marginTop: 18,
  },
  gridGap: {
    gap: 14,
  },
});
