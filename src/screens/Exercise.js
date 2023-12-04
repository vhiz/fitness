import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useQuery } from "react-query";
import { baseUrl } from "../axios";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import ExerciseList from "../components/ExerciseList";
import { demo } from "../../data";

export default function Exercise({ navigation }) {
  const { params: item } = useRoute();
  const { isLoading, data } = useQuery([item.name], async () => {
    const res = await baseUrl.get(`/bodyPart/${item.name}`);
    return res.data;
  });

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        className="bg-rose-500 mx-4 absolute rounded-full items-center justify-center flex"
        style={{ height: hp(5), width: hp(5), marginTop: hp(7) }}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size={hp(4)} color={"white"} />
      </TouchableOpacity>
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="capitalize font-semibold text-neutral-700"
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          {isLoading ? (
            <ActivityIndicator size={hp(10)} color={'#f43f5e'}  />
          ) : (
            <ExerciseList exercises={data} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}
