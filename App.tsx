/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {

} from 'react-native';
import AppNavigation from './AppNavigation';
import { ZegoUIKitPrebuiltCallFloatingMinimizedView } from '@zegocloud/zego-uikit-prebuilt-call-rn';

function App(): React.JSX.Element {

  return (
      <NavigationContainer>
        <AppNavigation />
        <ZegoUIKitPrebuiltCallFloatingMinimizedView />
      </NavigationContainer>
  );
}


export default App;
