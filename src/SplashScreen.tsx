import { View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { CommonActions } from "@react-navigation/native";
import TwitterLogoIcon from "./TwitterLogoIcon";

type Props = { navigation: any };

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const progress = useSharedValue(3);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: progress.value }],
    };
  });

  const init = async () => {
    await new Promise((resolve) => setTimeout(() => resolve(true), 800));
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }],
      })
    );
  };

  const animationLogic = async () => {
    progress.value = withTiming(2, { duration: 500 });
    await new Promise((resolve) => setTimeout(() => resolve(true), 300));
    progress.value = withTiming(999, { duration: 1000 });
  };

  useEffect(() => {
    setTimeout(() => {
      animationLogic();
      init();
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#55ACEE" }}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Animated.View style={[animatedStyle]}>
          <TwitterLogoIcon />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
