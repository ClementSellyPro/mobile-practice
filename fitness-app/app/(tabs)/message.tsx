import { StyleSheet, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function MessageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Calendar Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
