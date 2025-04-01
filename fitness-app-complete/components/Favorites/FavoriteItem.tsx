import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";

import PlayIcon from "@/assets/images/icons/play.svg";
import StarIcon from "@/assets/images/icons/star-selected.svg";
import ClockIcon from "@/assets/images/icons/clock-fav.svg";
import FlameIcon from "@/assets/images/icons/flame-fav.svg";
import ExerciceIcon from "@/assets/images/icons/running-fav.svg";

export function FavoriteItem() {
  const colors = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <View style={styles.description}>
        <ThemedText variant="subtitle" color="black">
          Upper Body
        </ThemedText>
        {/* <ThemedText color="black">Here is a little description</ThemedText> */}
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <ClockIcon />
            <ThemedText variant="defaultTiny" color="black">
              15 Minutes
            </ThemedText>
          </View>
          <View style={styles.detailItem}>
            <FlameIcon />
            <ThemedText variant="defaultTiny" color="black">
              150 Cal
            </ThemedText>
          </View>
          <View style={styles.detailItem}>
            <ExerciceIcon />
            <ThemedText variant="defaultTiny" color="black">
              150 Cal
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.photoContainer}>
        <Image source={require("@/assets/images/fav/fav5.png")} />
        <View style={[styles.play, { backgroundColor: colors.purple }]}>
          <PlayIcon />
        </View>
        <View style={styles.star}>
          <StarIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 20,
  },
  description: {
    paddingHorizontal: 20,
    width: 180,
    // width for wrap the detail items
  },
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    rowGap: 0,
    height: 45,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  photoContainer: {
    position: "relative",
  },
  play: {
    position: "absolute",
    top: "45%",
    right: "45%",
    padding: 5,
    borderRadius: 15,
  },
  star: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
