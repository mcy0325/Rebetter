import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatListScreen from '../Screens/ChatListScreen';

const NativeChatStack = createNativeStackNavigator();

const ChatStack = () => (
  <NativeChatStack.Navigator screenOptions={{headerShown: false}}>
    <NativeChatStack.Screen name="ChatList" component={ChatListScreen} />
  </NativeChatStack.Navigator>
);
export default ChatStack;
