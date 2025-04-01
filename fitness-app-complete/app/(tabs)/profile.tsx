import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";
import { Image, StyleSheet, View } from "react-native";
import { PersonalInfo } from "@/components/Profile/PersonalInfo";
import { IconList } from "@/components/Profile/ProfileItem";

import { BackButton } from "@/components/UI/BackButton";
import { ProfileItem } from "@/components/Profile/ProfileItem";
import { RelativePathString } from "expo-router";

type listType = {
  icon: keyof typeof IconList;
  name: string;
  path: RelativePathString;
};

const profileItemList: listType[] = [
  { icon: "editprofile", name: "Profile", path: "../editprofile" },
  { icon: "favorite", name: "Favorites", path: "../favorites" },
  { icon: "privacy", name: "Privacy Policy", path: "../privacy" },
  { icon: "setting", name: "Settings", path: "../settings" },
  { icon: "help", name: "Help", path: "../help" },
  { icon: "logout", name: "Logout", path: "../logout" },
];

export default function profile() {
  const colors = useThemeColors();

  return (
    <RootView>
      <View
        style={[styles.topSection, { backgroundColor: colors.purpleLight }]}
      >
        {/* Back button */}
        <BackButton name="My Profile" color="white" />
        <View style={styles.infoSection}>
          <Image source={require("@/assets/images/user-profile.png")} />
          <ThemedText variant="title">Madison Smith</ThemedText>
          <ThemedText variant="defaultThin">madisons@example.com</ThemedText>
          <ThemedText>Birthday: April 1st</ThemedText>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <PersonalInfo />
        <View style={styles.profileItems}>
          {profileItemList.map((item, index) => (
            <ProfileItem
              key={index}
              icon={item.icon}
              name={item.name}
              path={item.path}
            />
          ))}
        </View>
      </View>
    </RootView>
  );
}

const styles = StyleSheet.create({
  container: {},
  topSection: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    marginHorizontal: -35,
    marginVertical: -35,
  },
  infoSection: {
    marginTop: 20,
    alignItems: "center",
  },
  bottomSection: {
    position: "relative",
  },
  profileItems: {
    flexDirection: "column",
    gap: 20,
    marginTop: 120,
  },
});
