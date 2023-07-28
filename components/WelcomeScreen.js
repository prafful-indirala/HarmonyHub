import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width } = Dimensions.get("window");
  const scrollViewRef = useRef();

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    console.log("currentPage", currentPage);
    if (currentPage === 2) {
      setTimeout(() => {
        navigation.navigate("Home");
      }, 3000);
    }
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width }}>
          <Image
            source={require("../assets/images/welcome1.png")}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}>Discover Your Rhythm</Text>
            <Text style={styles.paragraph}>
              Explore a World of Melody and Beats
            </Text>
          </View>
        </View>
        <View style={{ width }}>
          <Image
            source={require("../assets/images/welcome2.png")}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}>Your Personal Concert Hall</Text>
            <Text style={styles.paragraph}>
              Tailor-Made Playlists and Recommendations Just for You
            </Text>
          </View>
        </View>
        <View style={{ width }}>
          <Image
            source={require("../assets/images/welcome3.png")}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}>Join the Groove Community</Text>
            <Text style={styles.paragraph}>
              Connect with Music Lovers Worldwide
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.paginationWrapper}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {Array.from(Array(3).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                { opacity: pageIndex === index ? 1 : 0.2 },
              ]}
              key={index}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
              Skip
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingVertical: 10,
              paddingHorizontal: 40,
              borderRadius: 10,
            }}
            onPress={() => {
              console.log("sliderState", sliderState);
              // Increment the current page index by 1
              const nextPageIndex = (pageIndex + 1) % 3;

              // Scroll to the next page using the ScrollView reference
              scrollViewRef.current.scrollTo({
                x: nextPageIndex * width,
                animated: true,
              });

              // Update the state with the new page index
              setSliderState({
                ...sliderState,
                currentPage: nextPageIndex,
              });
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4874e8",
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
  },
  imageStyle: {
    height: "45%",
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  paragraph: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 30,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#fff",
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 50,
  },
});
