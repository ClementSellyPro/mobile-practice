import { Text, View } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <View>
      <ThemedText variant="header">{title}</ThemedText>
    </View>
  );
}
