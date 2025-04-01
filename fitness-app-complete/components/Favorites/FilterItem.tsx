import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";
import { useThemeColors } from "@/hook/useThemeColors";

type PropsType = {
  name: string;
  isSelected: boolean;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export function FilterItem({ name, isSelected, setFilter }: PropsType) {
  const colors = useThemeColors();

  const filterSelection = () => {
    setFilter(name);
  };

  return (
    <TouchableOpacity
      onPress={filterSelection}
      style={[
        styles.filterItem,
        { backgroundColor: isSelected ? colors.green : colors.white },
      ]}
    >
      <ThemedText color="purple">{name}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filterItem: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 15,
  },
});
