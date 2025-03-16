import { Text, type TextProps, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});

type ThemedTextProps = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof (typeof Colors)[keyof typeof Colors];
};

export function ThemedText({
  variant,
  color,
  style,
  ...rest
}: ThemedTextProps) {
  const colors = useThemeColor();

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
