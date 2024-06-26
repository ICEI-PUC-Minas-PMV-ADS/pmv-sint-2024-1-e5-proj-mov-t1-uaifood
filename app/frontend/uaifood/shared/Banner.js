import {useEffect, useState} from "react";
import {Image, Dimensions, View, StyleSheet, ScrollView} from "react-native";
import Swiper from "react-native-swiper/src";

let { width } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://images.unsplash.com/photo-1566393028639-d108a42c46a7?q=80&w=2943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1568966299181-bb7282cc84f0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]);
    return () => {
      setBannerData([]);
    }
  }, []);

  return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.swiper}>
            <Swiper
                style={{ height: width / 2 }}
                showButtons={false}
                autoplay={true}
                autoplayTimeout={2}
            >
              {bannerData.map((item) => {
                return(
                    <Image
                        key={item}
                        style={styles.imageBanner}
                        resizeMode="contain"
                        source={{uri: item}}
                    />
                )
              })}
            </Swiper>
            <View style={{ height: 20 }}></View>
          </View>
        </View>
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro"
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20
  }
});

export default Banner;