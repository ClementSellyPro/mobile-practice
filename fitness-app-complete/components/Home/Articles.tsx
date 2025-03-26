import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ArticleItem } from "./ArticleItem";

export function Articles() {
  return (
    <View style={styles.container}>
      <ThemedText variant="subtitle" color="green">
        Articles & Tips
      </ThemedText>
      <View style={styles.articlesContainer}>
        <ArticleItem title={"Supplement Guide..."} image={"one"} />
        <ArticleItem
          title={"15 Quick & Effective Daily Routines..."}
          image={"two"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  articlesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
