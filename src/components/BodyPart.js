import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyparts } from "../../data";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
export default function BodyPart() {
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className=" font-semibold text-neutral-700"
      >
        Exercises
      </Text>
      <FlatList
        data={bodyparts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Exercise", item)}
        style={{
          width: wp(44),
          height: wp(52),
        }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          className="rounded-[35px] absolute"
          style={{ width: wp(44), height: wp(52) }}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: wp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />
        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
