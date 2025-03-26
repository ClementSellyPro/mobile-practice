import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

import StarIcon from "@/assets/images/icons/star.svg";

const imageURL = {
  one: require("@/assets/images/article0.png"),
  two: require("@/assets/images/article1.png"),
};

type PropsType = {
  title: string;
  image: keyof typeof imageURL;
};

export function ArticleItem({ title, image }: PropsType) {
  return (
    <View style={styles.container}>
      <StarIcon style={styles.star} width={15} height={15} />
      <Image source={imageURL[image]} />
      <ThemedText variant="defaultThin">{title}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "column",
    gap: 5,
    width: 160,
  },
  star: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 2,
  },
});
