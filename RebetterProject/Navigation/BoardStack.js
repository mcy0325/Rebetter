import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BoardScreen from '../Screens/BoardScreen';

const NativeCommunityStack = createNativeStackNavigator();

const CommunityStack = () => (
  <NativeCommunityStack.Navigator screenOptions={{headerShown: false}}>
    <NativeCommunityStack.Screen name="Board" component={BoardScreen} />
  </NativeCommunityStack.Navigator>
);
export default CommunityStack;
