import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

export function Progression() {
  const colors = useThemeColor();
  const circumference = 2 * Math.PI * 30;
  // strokeDashoffset control the progression
  const strokeDashoffset = circumference * (1 - 50 / 100);

  return (
    <View style={styles.container}>
      <Svg height="80" width="80">
        <Circle cx="40" cy="40" r="30" fill="black" />

        <Circle
          cx="40"
          cy="40"
          r="30"
          stroke={colors.tint}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={"rotate(-90, 40, 40)"}
        />
      </Svg>

      <Text style={styles.text}>50%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: {
    position: "absolute",
    color: "white",
    fontSize: 16,
  },
});
