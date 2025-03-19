import { Image, StyleSheet, View, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export function Header() {
  const colors = useThemeColor();

  return (
    <View style={styles.container}>
      {/* userProfile */}
      <View style={styles.userContainer}>
        <View
          style={[styles.userProfile, { backgroundColor: colors.tint }]}
        ></View>

        {/* info text */}
        <View style={styles.info}>
          <ThemedText color={"textGray"}>Good Morning</ThemedText>
          <ThemedText>John</ThemedText>
        </View>
      </View>

      {/* notification icon */}
      <Pressable
        style={[styles.notifContainer, { backgroundColor: colors.lightGray }]}
      >
        <Image
          style={styles.notifIcon}
          source={require("@/assets/images/icon/notification.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    paddingLeft: 10,
  },
  notifContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  notifIcon: {
    width: 25,
    height: 25,
  },
});
