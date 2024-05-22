import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {colors} from '../theme';

const SearchScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.Container}>
      <Text>찾기다 이놈아</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: '5%',
  },
});