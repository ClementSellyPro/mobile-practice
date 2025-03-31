import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useThemeColors } from "@/hook/useThemeColors";
import { ThemedText } from "../ThemedText";

import UserIcon from "@/assets/images/icons/user-white.svg";
import StarIcon from "@/assets/images/icons/star.svg";
import PrivacyIcon from "@/assets/images/icons/privacy.svg";
import SettingIcon from "@/assets/images/icons/setting.svg";
import SupportIcon from "@/assets/images/icons/support.svg";
import LogoutIcon from "@/assets/images/icons/log-out.svg";
import ArrowRight from "@/assets/images/icons/arrow-right.svg";
import { RelativePathString, useRouter } from "expo-router";

export const IconList = {
  editprofile: UserIcon,
  favorite: StarIcon,
  privacy: PrivacyIcon,
  setting: SettingIcon,
  help: SupportIcon,
  logout: LogoutIcon,
};

type PropsType = {
  icon: keyof typeof IconList;
  name: string;
  path: RelativePathString;
};

export function ProfileItem({ icon, name, path }: PropsType) {
  const colors = useThemeColors();
  const IconComponent = IconList[icon];
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(path)}
    >
      <View style={styles.iConTextGroup}>
        <View
          style={[styles.iconContainer, { backgroundColor: colors.purple }]}
        >
          <IconComponent width={20} height={20} />
        </View>

        <ThemedText variant="subtitle">{name}</ThemedText>
      </View>

      <ArrowRight />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  iConTextGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
