import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


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

const MainNavigation = () => {
  return (
    <div>
        <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {

              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home-outline';
                size = focused ? size + 8 : size + 5;
              } else if (route.name === 'Settings') {
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
            tabBarStyle: {
              backgroundColor: "blue",
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
           
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,

              elevation: 6

            }

          })

        }


      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 4 }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Header" component={Header} />
      </Tab.Navigator>
    </NavigationContainer>
    </div>
  );
};

export default MainNavigation;