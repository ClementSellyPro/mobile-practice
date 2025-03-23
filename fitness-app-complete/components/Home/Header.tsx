import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <ThemedText variant="title" color="purple">
          Hi, Madison
        </ThemedText>
        <ThemedText>It's time to challenge your limits.</ThemedText>
      </View>

      <View style={styles.iconsGroup}>
        <Pressable>
          <Image source={require("@/assets/images/icons/search.png")} />
        </Pressable>
        <Pressable>
          <Image source={require("@/assets/images/icons/notifications.png")} />
        </Pressable>
        <Pressable>
          <Image source={require("@/assets/images/icons/user.png")} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconsGroup: {
    flexDirection: "row",
    gap: 20,
  },
});
