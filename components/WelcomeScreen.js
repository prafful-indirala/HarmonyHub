import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const WelcomeScreen = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width } = Dimensions.get("window");

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
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
            <Text style={styles.header}>Welcome to TeamMate</Text>
            <Text style={styles.paragraph}>....something like that</Text>
          </View>
        </View>
        <View style={{ width }}>
          <Image
            source={require("../assets/images/welcome2.png")}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}>High quality Art work</Text>
            <Text style={styles.paragraph}>
              ... for a fraction of the price
            </Text>
          </View>
        </View>
        <View style={{ width }}>
          <Image
            source={require("../assets/images/welcome3.png")}
            style={styles.imageStyle}
          />
          <View style={styles.wrapper}>
            <Text style={styles.header}>Top Notch Artists</Text>
            <Text style={styles.paragraph}>... all in one place</Text>
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
    height: "38%",
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  paragraph: {
    fontSize: 17,
    color: "#fff",
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
