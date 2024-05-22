import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import MainStack from './MainStack';
import HomeStack from './HomeStack';

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator initialRouteName="Tabs" screenOptions={{headerShown: false}}>
    <Nav.Screen name="MainStack" component={MainStack} />
    <Nav.Screen name="HomeStack" component={HomeStack} />
    <Nav.Screen name="Tabs" component={Tabs} />
  </Nav.Navigator>
);

export default Root;
