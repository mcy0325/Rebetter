import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommunityScreen from '../Screens/CommunityScreen';

const NativeCommunityStack = createNativeStackNavigator();

const CommunityStack = () => (
  <NativeCommunityStack.Navigator screenOptions={{headerShown: false}}>
    <NativeCommunityStack.Screen name="Community" component={CommunityScreen} />
  </NativeCommunityStack.Navigator>
);
export default CommunityStack;
