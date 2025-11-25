// Drawer.js (Modified to contain the Tabs)
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Import the Tab Navigator
import ButtonTab from './ButtonTab'; 
import HomeScreen from '../screens/Home';

const DrawerNavigator = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator initialRouteName="My App">
      <DrawerNavigator.Screen 
        name="My App" 
        component={ButtonTab}
      />
      <DrawerNavigator.Screen name="Settings" component={HomeScreen} />
      <DrawerNavigator.Screen name="Notifications" component={HomeScreen} />
    </DrawerNavigator.Navigator>
  );
};

export default Drawer;