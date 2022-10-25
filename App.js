import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, Ionicons } from '@expo/vector-icons';
import CardScreen from './src/screens/CardScreen';
import HeaderScreen from './src/screens/HeaderScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import DesimgScreen from './src/components/DesimgScreen';
// import Tabs from './src/navigaton/Tabs';
import Test from './src/components/Test';

import DesimgScreen from "./src/components/DesimgScreen";



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    // <DesimgScreen/>

    // <Header/>

    <NavigationContainer>
      <Tab.Navigator


        // test

        // testEnd

        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, size, color, }) => {

              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
                size = focused ? size + 8 : size + 5;
              } else if (route.name === 'Description') {
                iconName = focused ? 'heart' : 'heart-outline';
                size = focused ? size + 8 : size + 5;
              } else if (route.name === 'Header') {
                iconName = focused ? 'person' : 'person-outline';
                size = focused ? size + 8 : size + 5;
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'black',


            tabBarShowLabel: false,
            headerShown: false,
            // tabBarIconStyle:{
            // //  position:"absolute"
            // display:"flex",
            // alignItems:"center",
            // paddingTop:20,
            // paddingBottom:20
            // },
            tabBarStyle: {
              backgroundColor: "white",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              // position: "absolute",
              // backgroundColor: "green",
              position: 'relative',
              // marginBottom:20,

            },
            // shadowColor: "#000",
            // shadowOffset: {
            //   width: 0,
            //   height: 3,
            // },
            // shadowOpacity: 1,
            // shadowRadius: 4.65,
            // elevation: 6,
          })

        }

      >

        <Tab.Screen name="Home" component={Header} options={{
          tabBarBadge: 4,
        }}

        />
        <Tab.Screen name="Description" component={DesimgScreen} />
        {/* <Tab.Screen name="Description" component={SettingsScreen} /> */}
        <Tab.Screen name="Header" component={Test} />
      </Tab.Navigator>
    </NavigationContainer >


  )
};
