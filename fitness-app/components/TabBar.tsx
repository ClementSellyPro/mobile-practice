import { View, Platform, StyleSheet, Image } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Shadows } from "@/constants/Shadows";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const colors = useThemeColor();

  const { buildHref } = useLinkBuilder();

  const imagesURL = {
    index: require("@/assets/images/icon/home_light.png"),
    message: require("@/assets/images/icon/message_light.png"),
    calendar: require("@/assets/images/icon/calendar_light.png"),
    user: require("@/assets/images/icon/user_light.png"),
  } as const;
  const imagesURL_selected = {
    index: require("@/assets/images/icon/home.png"),
    message: require("@/assets/images/icon/message.png"),
    calendar: require("@/assets/images/icon/calendar.png"),
    user: require("@/assets/images/icon/user.png"),
  } as const;

  type ImageKey = keyof typeof imagesURL;

  return (
    <View style={[styles.tabBar, { backgroundColor: colors.darkGreen }]}>
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
            <View
              style={[
                styles.selectedItem,
                isFocused ? { backgroundColor: colors.tint } : "",
              ]}
            >
              {
                <Image
                  source={
                    isFocused
                      ? imagesURL_selected[iconName]
                      : imagesURL[iconName]
                  }
                  style={styles.images}
                />
              }
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40,
    ...Shadows.dp2,
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
    borderRadius: 20,
  },
});
