import React, { useRef, useState } from "react";
import { Text, StyleSheet, View, Image, ScrollView, DrawerLayoutAndroid, Button, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
// import DesimgScreen from "./DesimgScreen";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';



const Header = () => {
  const drawer = useRef("");
  const [drawerPosition, setDrawerPosition] = useState("left");


  const navigationView = () => (
    <View style={styles.mainMenu}>

      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );



  return (
    <SafeAreaView style={styles.droidSafeArea}>


      <View style={styles.container}>

        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={200}
          renderNavigationView={navigationView}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
            <View >
              <Text >
                <AntDesign name="menu-unfold" size={24} color="black" onPress={() => drawer.current.openDrawer()} />
              </Text>
            </View>
            <Image
              style={styles.profilePic}
              source={require("../../assets/fa-solid_spa.png")}
            />
          </View>



          <ScrollView showsVerticalScrollIndicator={false}>

            {/* discover start */}
            <Text style={styles.headerFont}>
              Discover
            </Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.marginTopDiscover}
            >
              <Text style={styles.menuFont} >All</Text>
              <Text style={styles.menuFont} >Destinations</Text>
              <Text style={styles.menuFont} >Destinations</Text>
              <Text style={styles.menuFont} >Cities</Text>
              <Text style={styles.menuFont} >Cities</Text>
              <Text style={styles.menuFont} >Experiences</Text>
              <Text style={styles.menuFont} >Experiences</Text>
            </ScrollView>
            <View>
              {/* discover end */}
              {/* scrol card */}
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
              {/* end scroll card */}

              {/* activites */}
              <View style={styles.mainActivities}>
                <Text style={styles.secondHeaderFont}>Activities</Text>
                <View style={styles.actIcon}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon1.png")}
                    />
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon2.png")}
                    />
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon3.png")}
                    />
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon4.png")}
                    />

                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon5.png")}
                    />
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon6.png")}
                    />
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon6.png")}
                    />
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon6.png")}
                    />
                    <Image
                      style={styles.activitiesImg}
                      source={require("../../assets/menuIcon6.png")}
                    />

                  </ScrollView>
                </View>
              </View>
              {/* activities end */}

              {/* larn more */}
              <View style={styles.larnMoreMarginBottom}>
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



            </View>
          </ScrollView>

        </DrawerLayoutAndroid>
      </View>


    </SafeAreaView >
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 16,
    // backgroundColor: "red"
  },


  baseText: {
    fontFamily: "ubuntu"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  iconD: {
    color: "black",
  },
  profilePic: {
    height: 52,
    width: 52,
    borderRadius: 10,
    backgroundColor: "gray"
  },
  headerFlex: {

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerFont: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 38
  },
  menuFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  // discover
  marginTopDiscover: {
    marginTop: 20
  },
  menuFont: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    color: "#CFCFD1",
    marginRight: 20,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,


  },
  cardImg: {
    borderRadius: 20,
    width: 170,
    height: 250,
    backgroundColor: "red",
    marginRight: 20,
    marginTop: 20,
  },
  mapIconFlex: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 8,


  },
  textMargin: {
    marginLeft: 10,
    color: "white",
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 38
  },
  headingText: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22,
    width: "80%",
    color: "white"
  },
  contentManin: {
    position: "relative"
  },
  mainText: {
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 18
  },
  activitiesImg: {
    width: 38,
    height: 54,
    marginRight: 20
  },
  mainActivities: {
    marginTop: 30,

  },
  actIcon: {
    marginTop: 20,
    marginBottom: 30
  },
  secondHeaderFont: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "700"

  },
  // lern more
  larnMoreMarginBottom: {
    marginBottom: 20,
  },

  drawercontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },

});

export default Header;