import { Header } from "@/components/Home/Header";
import { RootView } from "@/components/RootView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const colors = useThemeColors();

  return (
    <RootView>
      <Header />
    </RootView>
  );
}

const styles = StyleSheet.create({});
