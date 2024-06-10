import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import {colors} from '../theme';

import MainScreen from '../Screens/MainScreen';
import BoardScreen from '../Screens/BoardScreen';
import ChatListScreen from '../Screens/ChatListScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Main"
    screenOptions={{
      tabBarActiveTintColor: colors.palette.Green,
      headerTitleAlign: 'center',
    }}>
    <Tab.Screen
      name="ChatList"
      component={ChatListScreen}
      options={({navigation}) => ({
        title: '채팅',
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Image
            source={require('../Assets/icons/MenuChat.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: color,
            }}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Main"
      component={MainScreen}
      options={{
        tabBarLabel: '홈',
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Image
            source={require('../Assets/icons/MenuHome.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: color,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Board"
      component={BoardScreen}
      options={{
        headerShown: false,
        tabBarLabel: '커뮤니티',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../Assets/icons/MenuCommunity.png')}
            style={{
              width: 25,
              height: 25,
              tintColor: color,
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
