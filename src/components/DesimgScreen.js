import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const DesimgScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>

      <View style={{ flex: 1, position: "relative" }}>
        {/* img section */}
        <View style={styles.imgSection} >
          <Image style={styles.imgDetails}
            source={require("../../assets/details.png")}
          />

          <View style={styles.contentSection}>
            <View>
              <AntDesign name="left" size={24} color="white" />

            </View>
            <View>
              <Text style={styles.textSize}>Hiking the Grand{"\n"} Canyon </Text>
              <View style={styles.locationFlex}>
                <MaterialIcons name="location-on" size={24} color="white" />
                <Text style={{ color: "white" }}>USA</Text>
              </View>
            </View>
          </View>
        </View>

        {/* bottom section */}
        <View style={{ flex: 2 }}>
          <View style={{ alignItems: "center", }}>
            <View style={styles.descriptionSection}>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", position: "relative" }}>
                <Text style={styles.titleMainFont}>Description</Text>
                <View style={styles.heartSection}><Text > <AntDesign name="hearto" size={24} color="#F35D38" /></Text></View>
              </View>
              <Text style={styles.pText}>Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.</Text>
              {/* price */}
              <View style={styles.priceSection}>
                <View>
                  <Text style={styles.pText}>PRICE</Text>
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                    <Text style={styles.priceFont}>$350</Text>
                    <Text style={styles.pText}>/person</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.pText}>Rating</Text>
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                    <Text style={styles.priceFont}>4.5</Text>
                    <Text style={styles.pText}>/4</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.pText}>DURATION</Text>
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                    <Text style={styles.priceFont}>3</Text>
                    <Text style={styles.pText}>/hours</Text>
                  </View>
                </View>
              </View>
              <View style={styles.btnNow}>
                <TouchableOpacity ><Text style={styles.bookNow}>Book Now</Text></TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </View>


    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  imgDetails: {

    height: "100%",
    width: "100%",
    position: "relative"
  },
  imgSection: {
    height: "80%",
    flex: 3,
    position: "relative"
  },
  locationFlex: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center"
  },
  contentSection: {
    position: "absolute",
    justifyContent: "space-around",
    paddingHorizontal: 24,
    width: "100%",
    height: "100%"
  },
  // text size
  textSize: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 38,
    color: "white"

  },
  // small p text
  pText: {

    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: "#C4C4C4",
    // marginTop:20,

  },
  // price section
  priceSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // title font
  titleFont: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 29,
    marginBottom: 20,
  },
  btnNow: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#F35D38",
    alignItems: "center",
    justifyContent: "center",



  },
  descriptionSection: {
    backgroundColor: "white",
    borderTopEndRadius: 34,
    borderTopStartRadius: 34,


    // position:"absolute",
    bottom: "20%",
    paddingHorizontal: 24,
    // paddingVertical: 1,
    // marginBottom: 48,
    width: "100%",
    // marginBottom: 50
  },
  bookNow: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 22,
    color: "white"
  },
  heartSection: {
    height: 64,
    width: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "relative",
    right: 0,
    bottom: 32,
    borderRadius: 50,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1

  },
  titleMainFont: {

    fontSize: 24,
    fontWeight: "700",
    lineHeight: 29,
    marginBottom: 20,
    marginTop: 30,
  },
  // price font
  priceFont: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 29,
    color: "#F35D38",
  }


})

export default DesimgScreen;

