import React from 'react';

const LearnMoreScreen = () => {
  return (
    <View>
    <Text style={styles.secondHeaderFont}>Learn More</Text>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.contentManin}>

        <Image
          style={styles.cardImg}
          source={require("../../assets/card2.jpg")}
        />
        <View style={styles.mainText}>
          <Text style={styles.headingText}>
            Kayaking in the  Tofino Sea
          </Text>
          <View style={styles.mapIconFlex}>
            <MaterialIcons name="location-on" size={24} color="white" />
            <Text style={styles.textMargin}>Canada</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentManin}>
        <Image
          style={styles.cardImg}
          source={require("../../assets/card2.jpg")}
        />
        <View style={styles.mainText}>
          <Text style={styles.headingText}>
            Kayaking in the  Tofino Sea
          </Text>
          <View style={styles.mapIconFlex}>
            <MaterialIcons name="location-on" size={24} color="white" />
            <Text style={styles.textMargin}>Canada</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentManin}>
        <Image
          style={styles.cardImg}
          source={require("../../assets/card2.jpg")}
        />
        <View style={styles.mainText}>
          <Text style={styles.headingText}>
            Kayaking in the  Tofino Sea
          </Text>
          <View style={styles.mapIconFlex}>
            <MaterialIcons name="location-on" size={24} color="white" />
            <Text style={styles.textMargin}>Canada</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentManin}>
        <Image
          style={styles.cardImg}
          source={require("../../assets/card2.jpg")}
        />
        <View style={styles.mainText}>
          <Text style={styles.headingText}>
            Kayaking in the  Tofino Sea
          </Text>
          <View style={styles.mapIconFlex}>
            <MaterialIcons name="location-on" size={24} color="white" />
            <Text style={styles.textMargin}>Canada</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentManin}>
        <Image
          style={styles.cardImg}
          source={require("../../assets/card2.jpg")}
        />
        <View style={styles.mainText}>
          <Text style={styles.headingText}>
            Kayaking in the  Tofino Sea
          </Text>
          <View style={styles.mapIconFlex}>
            <MaterialIcons name="location-on" size={24} color="white" />
            <Text style={styles.textMargin}>Canada</Text>
          </View>
        </View>
      </View>


    </ScrollView>

  </View>
  );
};

const styles = StyleSheet.create({
  contentManin: {
    position: "relative"
  },
  
  cardImg: {
    borderRadius: 20,
    width: 170,
    height: 250,
    backgroundColor: "red",
    marginRight: 20,
    marginTop: 20,
  },
  mainText: {
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 18
  },
  headingText: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22,
    width: "80%",
    color: "white"
  },
  mapIconFlex: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,
  },
  secondHeaderFont: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "700"

  },
  textMargin: {
    marginLeft: 10,
    color: "white",
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 38
  },
})


export default LearnMoreScreen;