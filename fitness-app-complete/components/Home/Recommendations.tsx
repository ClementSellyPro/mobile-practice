import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

import Arrow from "@/assets/images/icons/arrow-right.svg";
import { RecommendationItem } from "./RecommendationItem";

export function Recommendations() {
  return (
    <View style={styles.container}>
      {/* recommendations 'header' */}
      <View style={styles.header}>
        <ThemedText variant="subtitle" color="green">
          Recommendations
        </ThemedText>

        <View style={styles.seeAll}>
          <ThemedText>See All</ThemedText>
          <Arrow width={12} height={12} />
        </View>
      </View>

      {/* recommendation 'items' */}
      <View style={styles.recommendationItems}>
        <RecommendationItem
          title={"Squat Exercise"}
          image={"one"}
          isAddedFavorite={false}
        />
        <RecommendationItem
          title={"Full Body Stretching"}
          image={"two"}
          isAddedFavorite={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeAll: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  recommendationItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
