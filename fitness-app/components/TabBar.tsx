import { View, Platform, StyleSheet, Image } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Shadows } from "@/constants/Shadows";

type iconsProps = {
  home: (props: any) => React.JSX.Element;
  message: (props: any) => React.JSX.Element;
  calendar: (props: any) => React.JSX.Element;
  user: (props: any) => React.JSX.Element;
};

type imagesProps = {
  home: string;
  message: string;
  calendar: string;
  user: string;
};

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  // const icons:iconsProps = {
  //   home: (props: any) => (
  //     <Image
  //       source={require("@/assets/images/icon/home.png")}
  //       style={styles.images}
  //       {...props}
  //     />
  //   ),
  //   message: (props: any) => (
  //     <Image
  //       source={require("@/assets/images/icon/message.png")}
  //       style={styles.images}
  //       {...props}
  //     />
  //   ),
  //   calendar: (props: any) => (
  //     <Image
  //       source={require("@/assets/images/icon/calendar.png")}
  //       style={styles.images}
  //       {...props}
  //     />
  //   ),
  //   user: (props: any) => (
  //     <Image
  //       source={require("@/assets/images/icon/user.png")}
  //       style={styles.images}
  //       {...props}
  //     />
  //   ),
  // };
  const images: imagesProps = {
    home: "@/assets/images/icon/home.png",
    message: "@/assets/images/icon/message.png",
    calendar: "@/assets/images/icon/calendar.png",
    user: "@/assets/images/icon/user.png",
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

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

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabBarItem, {}]}
          >
            {
              <Image
                source={require(images[route.name])}
                style={styles.images}
              />
            }
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
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
    marginHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 40,
    ...Shadows.dp2,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  images: {
    width: 24,
    height: 24,
  },
});
