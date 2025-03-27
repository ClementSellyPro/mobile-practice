import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

import ClockIcon from "@/assets/images/icons/clock.svg";
import FlameIcon from "@/assets/images/icons/flame.svg";
import PlayIcon from "@/assets/images/icons/play.svg";
import StarIcon from "@/assets/images/icons/star.svg";
import { useThemeColors } from "@/hook/useThemeColors";
import { useState } from "react";

const imageURL = {
  one: require("@/assets/images/recoImage1.png"),
  two: require("@/assets/images/recoImage2.png"),
};

type PropsType = {
  title: string;
  image: keyof typeof imageURL;
  isAddedFavorite: boolean;
};

export function RecommendationItem({
  title,
  image,
  isAddedFavorite,
}: PropsType) {
  const colors = useThemeColors();
  const [isFavorite, setIsFavorite] = useState(isAddedFavorite);

  function addToFavorites() {
    setIsFavorite(!isFavorite);
  }

  return (
    <View style={styles.container}>
      {/* image section */}
      <Pressable style={styles.starContainer} onPress={addToFavorites}>
        <StarIcon
          width={15}
          height={15}
          // fill={isFavorite ? colors.green : colors.white}
        />
      </Pressable>
      <Image style={styles.image} source={imageURL[image]} />
      {/* text section */}
      <View style={styles.textSection}>
        <ThemedText color="green">{title}</ThemedText>
        <View
          style={[styles.playContainer, { backgroundColor: colors.purple }]}
        >
          <PlayIcon width={12} height={12} />
        </View>
        {/* info section */}
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <ClockIcon width={11} height={11} />
            <ThemedText variant="tiny">12 Minutes</ThemedText>
          </View>
          <View style={styles.infoItem}>
            <FlameIcon width={11} height={11} />
            <ThemedText variant="tiny">120 Kcal</ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 10,
    width: 165,
  },
  starContainer: {
    position: "absolute",
    right: 8,
    top: 5,
    zIndex: 2,
  },
  image: {
    width: 165,
  },
  textSection: {
    position: "relative",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  playContainer: {
    position: "absolute",
    right: 10,
    top: -12,
    justifyContent: "center",
    alignItems: "center",
    width: 23,
    height: 23,
    borderRadius: 12,
  },
  infoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
