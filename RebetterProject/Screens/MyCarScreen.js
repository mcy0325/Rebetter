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

const MyCarScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.Container}>
      <Text>마이카다 이놈아</Text>
    </View>
  );
};

export default MyCarScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: '5%',
  },
});
