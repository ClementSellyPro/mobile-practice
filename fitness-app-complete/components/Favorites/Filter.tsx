import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { FilterItem } from "./FilterItem";

type PropsType = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export function Filter({ filter, setFilter }: PropsType) {
  const filterList = ["All", "Video", "Article"];

  return (
    <View style={styles.container}>
      <ThemedText variant="tiny" color="green">
        Sort By
      </ThemedText>

      <View style={styles.filters}>
        {filterList.map((item, index) => (
          <FilterItem
            key={index}
            name={item}
            isSelected={filter === item}
            setFilter={setFilter}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingLeft: 15,
  },
  filters: {
    flexDirection: "row",
    gap: 15,
  },
});
