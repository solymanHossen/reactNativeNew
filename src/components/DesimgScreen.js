import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const DesimgScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ flex: 1 }}>
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
          <Text style={styles.titleFont}>Description</Text>
          <Text style={styles.pText}>Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.</Text>
          {/* price */}
          <View style={styles.priceSection}>
            <View>
              <Text style={styles.pText}>PRICE</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text>$350</Text>
                <Text style={styles.pText}>/person</Text>
              </View>
            </View>
            <View>
              <Text style={styles.pText}>PRICE</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text>$350</Text>
                <Text style={styles.pText}>/person</Text>
              </View>
            </View>
            <View>
              <Text style={styles.pText}>PRICE</Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text>$350</Text>
                <Text style={styles.pText}>/person</Text>
              </View>


            </View>
          </View>
          <Button
            title=" Book Now"
            style={styles.btnNow}
          />
        </View>

      </View>

    </SafeAreaView>
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
  },
  locationFlex: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center"
  },
  contentSection: {
    position: "absolute",

    justifyContent: "space-between",

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
  },
  btnNow: {
    paddingTop: 24,
    paddingBottom: 24,
   
    borderRadius: 10,
    backgroundColor:" #F35D38"
  }

})

export default DesimgScreen;

