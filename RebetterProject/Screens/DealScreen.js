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

const DealScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.Container}>
      <Text>거래다 이놈아</Text>
    </View>
  );
};

export default DealScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: '5%',
  },
});