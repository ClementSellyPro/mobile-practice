import { Colors } from "@/constants/Colors";
import { useThemeColors } from "@/hook/useThemeColors";
import { StyleSheet, Text, TextProps } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    fontWeight: "light",
    // fontFamily: "League",
  },
  tiny: {
    fontSize: 11,
    fontWeight: "200",
    // fontFamily: "League",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // fontFamily: "Poppins",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    // fontFamily: "Poppins",
  },
  titleScreen: {
    fontSize: 28,
    fontWeight: "bold",
    // fontFamily: "Poppins",
  },
});

type PropsType = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof (typeof Colors)["light"];
};

export function ThemedText({ variant, color, style, ...rest }: PropsType) {
  const colors = useThemeColors();

  // const [fontsLoaded] = useFonts({
  //   Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
  //   League: require("@/assets/font/LeagueSpartan-VariableFontwght.ttf"),
  // });

  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     setIsReady(true);
  //   }
  // }, [fontsLoaded]);

  // if (!isReady) return null;

  return (
    <Text
      style={[
        styles[variant ?? "default"],
        { color: colors[color ?? "text"] },
        style,
      ]}
      {...rest}
    />
  );
}
