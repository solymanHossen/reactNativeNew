import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const App = () => {
  const drawer = useRef("");
  const [drawerPosition, setDrawerPosition] = useState("left");


  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );


  return (

    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      renderNavigationView={navigationView}
    >
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
        <View style={styles.container}>
          <Text >
            <AntDesign name="menu-unfold" size={24} color="black" onPress={() => drawer.current.openDrawer()} />
          </Text>
        </View>
        <View>
          <Text>solyman</Text>
        </View>
      </View>
      <Text>skjdkjf</Text>
    </DrawerLayoutAndroid>

  );
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginTop: 20,

    // padding: 16
  },
  // navigationContainer: {
  //   backgroundColor: "#ecf0f1"
  // },
  // paragraph: {
  //   padding: 16,
  //   fontSize: 15,
  //   textAlign: "center"
  // }
});

export default App;