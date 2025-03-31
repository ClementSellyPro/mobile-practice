import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

import WorkoutIcon from "@/assets/images/icons/workout.svg";
import ProgressIcon from "@/assets/images/icons/progress.svg";
import NutritionIcon from "@/assets/images/icons/nutrition.svg";
import CommunityIcon from "@/assets/images/icons/community.svg";

const iconList = {
  workout: WorkoutIcon,
  progress: ProgressIcon,
  nutrition: NutritionIcon,
  community: CommunityIcon,
};

type PropsType = {
  text: string;
  icon: keyof typeof iconList;
};

export function CategoryItem({ text, icon }: PropsType) {
  const IconComponent = iconList[icon];

  return (
    <TouchableOpacity style={styles.categoriesItem}>
      <IconComponent width={32} height={32} />
      <ThemedText variant="tiny" color="purpleLight">
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoriesItem: {
    flex: 1 / 6,
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
});
