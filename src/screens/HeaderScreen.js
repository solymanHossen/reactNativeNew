import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const HeaderScreen = () => {
  return (
   
         <View style={styles.headerFlex} >
          <AntDesign name="menu-unfold" size={24} color="black" />
          <Image
            style={styles.profilePic}
            source={require("../../assets/fa-solid_spa.png")}
          />
        </View>
   
  );
};

const styles = StyleSheet.create({
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
  
})




export default HeaderScreen;