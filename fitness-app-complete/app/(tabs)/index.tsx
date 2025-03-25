import { Header } from "@/components/Home/Header";
import { RootView } from "@/components/RootView";
import { useThemeColors } from "@/hook/useThemeColors";
import { StyleSheet } from "react-native";

export default function Index() {
  const colors = useThemeColors();

  return (
    <RootView>
      <Header />
    </RootView>
  );
}

const styles = StyleSheet.create({});
