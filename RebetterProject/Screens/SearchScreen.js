import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {colors} from '../theme';
import {
  NaverMapView,
  NaverMapMarkerOverlay,
} from '@mj-studio/react-native-naver-map';

const SearchScreen = ({navigation: {navigate}}) => {
  return (
    <View style={{flex: 1}}>
      <NaverMapView
        style={{flex: 1}}
        initialCamera={{
          latitude: 37.5992142,
          longitude: 126.8652116,
        }}
      />
    </View>
  );
};

export default SearchScreen;
