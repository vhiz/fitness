import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { XCircleIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails({ navigation }) {
  const { params: item } = useRoute();
  return (
    <View className="flex flex-1">
      <StatusBar style="dark" />
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="mx-2 absolute rounded-full mt-8 right-0"
      >
        <XCircleIcon color={"#f43f5e"} size={hp(4.5)} />
      </TouchableOpacity>
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          className="font-semibold text-neutral-800 tracking-wide capitalize"
          style={{ fontSize: hp(3.5) }}
          entering={FadeInDown.duration(300).springify()}
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(300).delay(100).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide capitalize"
        >
          Equipment{" "}
          <Text className="font-bold text-neutral-800">{item.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(200).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide capitalize"
        >
          Seconsary Muscles{" "}
          <Text className="font-bold text-neutral-800">
            {item.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide capitalize"
        >
          Target{" "}
          <Text className="font-bold text-neutral-800">{item.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          style={{ fontSize: hp(3.5) }}
          className="text-neutral-700 tracking-wide capitalize"
        >
          Instructions
        </Animated.Text>
        {item.instructions.map((instruction, i) => (
          <Animated.Text
            entering={FadeInDown.delay((i + 6) * 100)
              .duration(300)
              .springify()}
            key={i}
          >
            {instruction}
          </Animated.Text>
        ))}
      </ScrollView>
    </View>
  );
}
