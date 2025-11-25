import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import Drawer from './app/navigation/Drawer';
import 'react-native-reanimated';

enableScreens();

const App = () => {
  return <AppNavigator />;
};

export default App;
