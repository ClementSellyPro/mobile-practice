import { StyleSheet, TouchableOpacity, View } from "react-native";

import SearchIcon from "@/assets/images/icons/search.svg";
import NotificationIcon from "@/assets/images/icons/notification.svg";
import UserIcon from "@/assets/images/icons/user.svg";
import { useRouter } from "expo-router";
import { BackButton_2 } from "./UI/BackButton_2";

export function HeaderPage({ name }: { name: string }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BackButton_2 name={name} color="purple" />
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
  buttonContainer: {
    position: "relative",
  },
  iconsGroup: {
    flexDirection: "row",
    gap: 20,
  },
});
