import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";
import { BackButton } from "@/components/UI/BackButton";
import { PersonalInfo } from "@/components/Profile/PersonalInfo";
import { useState } from "react";
import { Test } from "@/components/Test";

import EditIcon from "@/assets/images/icons/edit.svg";

export default function editprofile() {
  const colors = useThemeColors();
  const [name, setName] = useState("Madison Smith");
  const [email, setEmail] = useState("madisons@example.com");
  const [number, setNumber] = useState("+123 567 89000");
  const [birthday, setBirthday] = useState("01/04/1990");
  const [weight, setWeight] = useState("75 Kg");
  const [height, setHeight] = useState("1.65 CM");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
              <View
                style={[styles.editIcon, { backgroundColor: colors.green }]}
              >
                <EditIcon />
              </View>
            </View>
            <ThemedText variant="title">Madison Smith</ThemedText>
            <ThemedText variant="defaultThin">madisons@example.com</ThemedText>
            <ThemedText>Birthday: April 1st</ThemedText>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <PersonalInfo />
          {/* form section */}
          <View style={[styles.form, { backgroundColor: colors.black }]}>
            {/* Full Name Input */}
            <Controller
              control={control}
              name="name"
              rules={{ required: "Full Name is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <ThemedText style={styles.labels} color="purple">
                    Full name
                  </ThemedText>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputs, { backgroundColor: colors.white }]}
                  />
                </>
              )}
            />
            {errors.name && (
              <Text style={{ color: "red" }}>Full Name is required</Text>
            )}
            {/* Email Input */}
            <Controller
              control={control}
              name="email"
              rules={{ required: "Email is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <ThemedText style={styles.labels} color="purple">
                    Email
                  </ThemedText>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputs, { backgroundColor: colors.white }]}
                  />
                </>
              )}
            />
            {errors.email && (
              <Text style={{ color: "red" }}>Email is required</Text>
            )}
            {/* Mobile number Input */}
            <Controller
              control={control}
              name="number"
              rules={{ required: "Mobile Number is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <ThemedText style={styles.labels} color="purple">
                    Mobile Number
                  </ThemedText>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputs, { backgroundColor: colors.white }]}
                  />
                </>
              )}
            />
            {errors.phone && (
              <Text style={{ color: "red" }}>Mobile Number is required</Text>
            )}
            {/* Date of birth Input */}
            <Controller
              control={control}
              name="birth"
              rules={{ required: "Date of birth is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <ThemedText style={styles.labels} color="purple">
                    Date of birth
                  </ThemedText>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputs, { backgroundColor: colors.white }]}
                  />
                </>
              )}
            />
            {errors.birth && (
              <Text style={{ color: "red" }}>Date of birth is required</Text>
            )}
            {/* Weight Input */}
            <Controller
              control={control}
              name="weight"
              rules={{ required: "Weight is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <ThemedText style={styles.labels} color="purple">
                    Weight
                  </ThemedText>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputs, { backgroundColor: colors.white }]}
                  />
                </>
              )}
            />
            {errors.weight && (
              <Text style={{ color: "red" }}>Weight is required</Text>
            )}
            {/* Height Input */}
            <Controller
              control={control}
              name="height"
              rules={{ required: "Height is required" }}
              render={({ field: { onChange, value } }) => (
                <>
                  <ThemedText style={styles.labels} color="purple">
                    Height
                  </ThemedText>
                  <TextInput
                    value={value}
                    onChangeText={onChange}
                    style={[styles.inputs, { backgroundColor: colors.white }]}
                  />
                </>
              )}
            />
            {errors.height && (
              <Text style={{ color: "red" }}>Height is required</Text>
            )}
          </View>

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
  form: {
    marginTop: 120,
  },
  inputs: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 16,
    fontSize: 18,
    fontWeight: "500",
  },
  labels: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
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
