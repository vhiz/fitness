import { View, Text } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { images } from "../../data";
import ItemCard from "./ItemCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function ImgSlider() {
  return (
    <View>
      <Carousel
        data={images}
        loop={true}
        autoplay={true}
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={wp(100) - 70}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}
