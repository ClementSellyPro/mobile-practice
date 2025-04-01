import { StyleSheet, Text, TextInput, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { useForm, Controller } from "react-hook-form";
import { useThemeColors } from "@/hook/useThemeColors";
import { useState } from "react";

export function FormEditProfile() {
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
      {errors.email && <Text style={{ color: "red" }}>Email is required</Text>}
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
  );
}

const styles = StyleSheet.create({
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
});
