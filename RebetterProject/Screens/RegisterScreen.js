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

const RegisterScreen = ({navigation: {navigate}}) => {
  return (
    <View style={styles.Container}>
      <Text>배터리 등록 이놈아</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: '5%',
  },
});
