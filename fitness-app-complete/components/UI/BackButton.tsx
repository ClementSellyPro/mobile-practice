import { StyleSheet, TouchableOpacity } from "react-native";

import ArrowLeft from "@/assets/images/icons/arrow-left.svg";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

type PropsType = {
  name: string;
  color: keyof (typeof Colors)["light"];
};

export function BackButton({ name, color }: PropsType) {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
      <ArrowLeft />
      <ThemedText variant="title" color={color}>
        {name}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    left: 35,
    top: 35,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
