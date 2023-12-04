import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Welcome({ navigation }) {
  // const navigation = useNavigation();
  return (
    <View className="flex-1 justify-end">
      <StatusBar style="light" />
      <Image
        className="w-full h-full absolute"
        source={require("../../assets/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).duration(300).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(5) }}
          >
            Best <Text className="text-rose-500">Workout</Text>
          </Text>
          <Text
            className="text-white font-bold tracking-wide"
            style={{ fontSize: hp(5) }}
          >
            For you
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(200).duration(300).springify()}
        >
          <TouchableOpacity
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
            style={{ height: hp(7), width: wp(70) }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-widest"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
