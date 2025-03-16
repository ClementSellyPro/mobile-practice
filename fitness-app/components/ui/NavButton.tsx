import { Image, StyleSheet, View } from "react-native";

type Props = {
  icon: keyof typeof images;
};

const images = {
  home: require("@/assets/images/icon/home.png"),
  message: require("@/assets/images/icon/message.png"),
  calendar: require("@/assets/images/icon/calendar.png"),
  user: require("@/assets/images/icon/user.png"),
};

export function NavButton({ icon }: Props) {
  return (
    <View>
      <Image source={images[icon]} style={styles.images} />
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    width: 50,
    height: 50,
    borderStyle: "solid",
    borderColor: "#ff00ff",
  },
});
