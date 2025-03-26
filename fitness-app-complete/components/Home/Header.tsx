import { Image, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";

import SearchIcon from "@/assets/images/icons/search.svg";
import NotificationIcon from "@/assets/images/icons/notification.svg";
import UserIcon from "@/assets/images/icons/user.svg";

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
          <SearchIcon width={20} height={20} />
        </Pressable>
        <Pressable>
          <NotificationIcon width={20} height={20} />
        </Pressable>
        <Pressable>
          <UserIcon width={20} height={20} />
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
