import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyCarScreen from '../Screens/MyCarScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import SearchScreen from '../Screens/SearchScreen';
import DealScreen from '../Screens/DealScreen';

const NativeHomeStack = createNativeStackNavigator();

const HomeStack = () => (
  <NativeHomeStack.Navigator screenOptions={{headerShown: false}}>
    <NativeHomeStack.Screen name="MyCar" component={MyCarScreen} />
    <NativeHomeStack.Screen name="Register" component={RegisterScreen} />
    <NativeHomeStack.Screen name="Search" component={SearchScreen} />
    <NativeHomeStack.Screen name="Deal" component={DealScreen} />
  </NativeHomeStack.Navigator>
);
export default HomeStack;
