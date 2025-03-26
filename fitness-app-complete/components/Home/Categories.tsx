import { StyleSheet, View } from "react-native";
import { CategoryItem } from "./CategoryItem";

import VerticalBar from "@/assets/images/icons/verticalBar.svg";

export function Categories() {
  return (
    <View style={styles.container}>
      <CategoryItem text={"Workout"} icon={"workout"} />
      <VerticalBar />
      <CategoryItem text={"Progress Tracking"} icon={"progress"} />
      <VerticalBar />
      <CategoryItem text={"Nutrition"} icon={"nutrition"} />
      <VerticalBar />
      <CategoryItem text={"Community"} icon={"community"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
});
