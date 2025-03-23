import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <ThemedText variant="title">This is a title</ThemedText>
      <ThemedText variant="titleScreen">This is a default text</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
