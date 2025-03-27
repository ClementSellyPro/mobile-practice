import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";
import { Image, StyleSheet, View } from "react-native";
import { PersonalInfo } from "@/components/Profile/PersonalInfo";

import ArrowRight from "@/assets/images/icons/arrow-right.svg";
import { BackButton } from "@/components/UI/BackButton";

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
});
