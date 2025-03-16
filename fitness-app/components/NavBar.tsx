import { useThemeColor } from "@/hooks/useThemeColor";
import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { NavButton } from "./ui/NavButton";

type PropsType = {};

export function NavBar({}: PropsType) {
  const colors = useThemeColor();

  return (
    <View style={[styles.navBar, { backgroundColor: colors.darkGreen }]}>
      <NavButton icon={"home"} />
      <NavButton icon={"message"} />
      <NavButton icon={"calendar"} />
      <NavButton icon={"user"} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderRadius: 40,
  },
  buttons: {
    width: 10,
  },
});
