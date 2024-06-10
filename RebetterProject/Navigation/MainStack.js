import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../Screens/MainScreen';

const NativeMainStack = createNativeStackNavigator();

const MainStack = () => (
  <NativeMainStack.Navigator screenOptions={{headerShown: false}}>
    <NativeMainStack.Screen name="Main" component={MainScreen} />
  </NativeMainStack.Navigator>
);
export default MainStack;
