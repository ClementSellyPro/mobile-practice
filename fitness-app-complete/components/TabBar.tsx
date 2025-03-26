import { View, StyleSheet, Image } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useThemeColors } from "@/hook/useThemeColors";

import HomeIcon from "@/assets/images/icons/home.svg";
import ResourcesIcon from "@/assets/images/icons/resources.svg";
import StarIcon from "@/assets/images/icons/star.svg";
import SupportIcon from "@/assets/images/icons/support.svg";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const colors = useThemeColors();

  const { buildHref } = useLinkBuilder();

  const icons = {
    index: <HomeIcon width={24} height={24} />,
    resources: <ResourcesIcon width={24} height={24} />,
    favorites: <StarIcon width={24} height={24} />,
    support: <SupportIcon width={24} height={24} />,
  } as const;
  // const imagesURL_selected = {
  //   index: require("@/assets/images/icons/home.svg"),
  //   resources: require("@/assets/images/icons/resources.svg"),
  //   favorites: require("@/assets/images/icons/star.svg"),
  //   support: require("@/assets/images/icons/support.svg"),
  // } as const;

  type ImageKey = keyof typeof icons;

  return (
    <View style={[styles.tabBar, { backgroundColor: colors.purpleLight }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const iconName = route.name as ImageKey;

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabBarItem]}
          >
            <View style={[styles.selectedItem, ,]}>{icons[iconName]}</View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: 5,
  },
  images: {
    width: 24,
    height: 24,
  },
  selectedItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 38,
    width: 38,
  },
});
