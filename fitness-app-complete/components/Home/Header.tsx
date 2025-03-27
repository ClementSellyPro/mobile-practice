import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

import SearchIcon from "@/assets/images/icons/search.svg";
import NotificationIcon from "@/assets/images/icons/notification.svg";
import UserIcon from "@/assets/images/icons/user.svg";
import { useRouter } from "expo-router";

export function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <ThemedText variant="title" color="purple">
          Hi, Madison
        </ThemedText>
        <ThemedText>It's time to challenge your limits.</ThemedText>
      </View>

      <View style={styles.iconsGroup}>
        <TouchableOpacity>
          <SearchIcon width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <NotificationIcon width={20} height={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <UserIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  iconsGroup: {
    flexDirection: "row",
    gap: 20,
  },
});
