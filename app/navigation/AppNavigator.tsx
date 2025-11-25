// AppNavigator.tsx (Modified)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer'; 

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default AppNavigator;