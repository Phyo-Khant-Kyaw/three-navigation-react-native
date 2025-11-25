// ButtonTab.js (Modified to contain the Stack)
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

const RootStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="HomePage" component={HomeScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const ButtonTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={HomeScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default ButtonTab;