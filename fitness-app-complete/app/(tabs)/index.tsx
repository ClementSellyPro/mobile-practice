import { Articles } from "@/components/Home/Articles";
import { Categories } from "@/components/Home/Categories";
import { Challenge } from "@/components/Home/Challenge";
import { Header } from "@/components/Home/Header";
import { Recommendations } from "@/components/Home/Recommendations";
import { RootView } from "@/components/RootView";
import { useThemeColors } from "@/hook/useThemeColors";
import { StyleSheet } from "react-native";

export default function Index() {
  const colors = useThemeColors();

  return (
    <RootView>
      <Header />
      <Categories />
      <Recommendations />
      <Challenge />
      <Articles />
    </RootView>
  );
}

const styles = StyleSheet.create({});
