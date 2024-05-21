import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import MainStack from './MainStack';

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator
    initialRouteName="MainStack"
    screenOptions={{headerShown: false}}>
    <Nav.Screen name="MainStack" component={MainStack} />
  </Nav.Navigator>
);

export default Root;
