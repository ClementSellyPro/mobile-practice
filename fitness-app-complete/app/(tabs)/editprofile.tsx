import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";
import { FormEditProfile } from "@/components/Profile/FormEditProfile";
import { BackButton } from "@/components/UI/BackButton";
import { PersonalInfo } from "@/components/Profile/PersonalInfo";
import { useState } from "react";

import EditIcon from "@/assets/images/icons/edit.svg";

export default function editprofile() {
  const colors = useThemeColors();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <RootView>
        <View
          style={[styles.topSection, { backgroundColor: colors.purpleLight }]}
        >
          {/* Back button */}
          <BackButton name="My Profile" color="white" />
          <View style={styles.infoSection}>
            <View style={styles.profilePic}>
              <Image source={require("@/assets/images/user-profile.png")} />
              <TouchableOpacity
                style={[styles.editIcon, { backgroundColor: colors.green }]}
              >
                <EditIcon />
              </TouchableOpacity>
            </View>
            <ThemedText variant="title">Madison Smith</ThemedText>
            <ThemedText variant="defaultThin">madisons@example.com</ThemedText>
            <ThemedText>Birthday: April 1st</ThemedText>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <PersonalInfo />
          {/* form section */}
          <FormEditProfile />

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[styles.updateBtn, { backgroundColor: colors.green }]}
            >
              <ThemedText style={styles.textBtn} color="black">
                Update Profile
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </RootView>
    </ScrollView>
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
  profilePic: {
    position: "relative",
  },
  editIcon: {
    position: "absolute",
    right: 5,
    bottom: 5,
    borderRadius: 20,
    padding: 5,
  },
  bottomSection: {
    position: "relative",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    paddingBottom: 75,
    paddingTop: 35,
  },
  updateBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    height: 40,
    width: "60%",
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
