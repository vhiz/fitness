import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
export default function ExerciseList({ exercises }) {
  return (
    <View>
      <FlatList
        data={exercises}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        className="flex py-3 space-y-2"
        onPress={() => navigation.push("ExerciseDetails", item)}
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            contentFit="cover"
            source={{ uri: item.gifUrl }}
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
        >
          {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
