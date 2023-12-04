import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon } from "react-native-heroicons/solid";
import ImgSlider from "../components/ImgSlider";
import BodyPart from "../components/BodyPart";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            className="capitalize font-bold tracking-wider text-neutral-700"
            style={{ fontSize: hp(4.5) }}
          >
            ready to
          </Text>
          <Text
            className="capitalize font-bold tracking-wider text-rose-500"
            style={{ fontSize: hp(4.5) }}
          >
            Workout
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../../assets/avatar.jpeg")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <TouchableOpacity
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <BellIcon size={hp(3)} color={"grey"} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <ImgSlider />
      </View>

      <View className="flex-1">
        <BodyPart />
      </View>
    </SafeAreaView>
  );
}
