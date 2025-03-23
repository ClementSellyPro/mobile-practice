import { useThemeColors } from "@/hook/useThemeColors";
import { StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PropsType = ViewProps;

export function RootView({ style, ...rest }: PropsType) {
  const colors = useThemeColors();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.black }, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    paddingVertical: 35,
  },
});
