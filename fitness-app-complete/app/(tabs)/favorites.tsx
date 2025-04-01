import { FavoriteItem } from "@/components/Favorites/FavoriteItem";
import { Filter } from "@/components/Favorites/Filter";
import { HeaderPage } from "@/components/HeaderPage";
import { RootView } from "@/components/RootView";
import { useThemeColors } from "@/hook/useThemeColors";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function favorites() {
  const colors = useThemeColors();
  const [filter, setFilter] = useState("All");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.black }}>
      <RootView>
        <HeaderPage name="Favorites" />
        <View>
          <Filter filter={filter} setFilter={setFilter} />
        </View>

        <View style={styles.favoritesItem}>
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
        </View>
      </RootView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  favoritesItem: {
    flexDirection: "column",
    gap: 20,
    marginVertical: 40,
  },
});
